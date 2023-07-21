import { Component } from "react";
import { SearchBar } from "./Searchbar/searchbar";
import * as API from 'services/api';

export class App extends Component {
  state = {
    images: [],
    status: 'idle',
  };

  getImages = async values => {
    const images = await API.getMaterials(values);
    this.setState({
      images: [...images],
    })
  }

  render() {
    return (
      <SearchBar onSubmit={this.getImages} />
    )}
};
