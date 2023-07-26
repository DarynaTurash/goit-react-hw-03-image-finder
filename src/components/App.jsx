
import { Component } from "react";
import { SearchBar } from "./Searchbar/searchbar";
import { getMaterials } from 'services/api';
import { ImageGallery } from "./ImageGallery/imageGallery";

import { Loader } from "./Loader/loader";
import { LoadMore } from "components/ButtonLoadMore/buttonLoadMore";


export class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  state = {
    materials: [],
    status: 'idle',
    page: 1,
    searchQuery: "",
    isLoadMoreShown: false,
  };

  handleControlSearchQuery = (e) => {
      this.setState({
        searchQuery: e.target.value,
      });
  };

  handleSearchSubmit = () => {
    this.setState({ materials: [], page: 1 }, () => {
      this.fetchMaterials();
    });
  };

  fetchMaterials = async () => {
    const { searchQuery, page } = this.state;

    try {

      this.setState({
        status: 'pending',
      });

      const imageData = await getMaterials(searchQuery, page);

      this.setState({
        materials: [...imageData.hits], 
        status: 'resolved',
        isLoadMoreShown: true,
      });

    } catch (error) {

      this.setState({
        status: 'rejected',
      });

      console.error('Error fetching materials:', error);
    }
  };

  handleLoadMore = async () => {
    const nextPage = this.state.page + 1;
    const PER_PAGE = 24;
    const { searchQuery } = this.state;

    try {

      const imagesDataLoadMore = await getMaterials(searchQuery, nextPage); 
  
      this.setState((prevState) => ({
        materials: [...prevState.materials, ...imagesDataLoadMore.hits],
        page: nextPage,
        isLoadMoreShown: nextPage !== Math.ceil(imagesDataLoadMore.totalHits / PER_PAGE),
      }));
    } catch (error) {

      this.setState({
        status: 'rejected',
      });

      console.error('Error fetching materials:', error);
    }
  };

  componentDiddUpdate(prevProps, prevState) {
    const { searchQuery: prevSearchQuery, page: prevPage } = prevState;
    const { searchQuery, page } = this.state;

    if (searchQuery === prevSearchQuery && page !== prevPage) {
    this.handleLoadMore();
    }
  };


  render() {
    const { status, materials, isLoadMoreShown, searchQuery } = this.state;
    
    return (
      <div>
        <SearchBar onChange={this.handleControlSearchQuery} value={searchQuery} onSubmit={this.handleSearchSubmit} />
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <ImageGallery images={materials} />}
        {isLoadMoreShown && status === 'resolved' && <LoadMore onLoadMore={this.handleLoadMore} />}
        {status === 'rejected' && <p>Error occurred while fetching materials.</p>}
      </div>
    );
  }
};