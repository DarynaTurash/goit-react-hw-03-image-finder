
import { Component } from "react";
import { SearchBar } from "./Searchbar/searchbar";
import { getMaterials } from 'services/api';
import { ImageGallery } from "./ImageGallery/imageGallery";

import { ThreeDots } from  'react-loader-spinner'

export class App extends Component {
  state = {
    materials: [],
    status: 'idle',
  };

  async getImages(searchQuery) {
    try {
      this.setState({
        status: 'pending',
      });

      const materials = await getMaterials(searchQuery);

      this.setState({
        materials: [...materials],
        status: 'resolved',
      });
    } catch (error) {
      this.setState({
        status: 'rejected',
      });
      console.error('Error fetching materials:', error);
    }
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={(values) => this.getImages(values.searchQuery)} />
        {this.state.status === 'pending' && <ThreeDots 
                                                      height="80" 
                                                      width="80" 
                                                      radius="9"
                                                      color="#4fa94d" 
                                                      ariaLabel="three-dots-loading"
                                                      wrapperStyle={{}}
                                                      wrapperClassName=""
                                                      visible={true}
                                                      />}
        {this.state.status === 'resolved' && <ImageGallery images={this.state.materials} />}
        {this.state.status === 'rejected' && <p>Error occurred while fetching materials.</p>}
      </div>
    );
  }
}