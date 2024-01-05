import { Component } from 'react';
import { SearchBar } from './SearchBar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { requestPicture } from '../services/API';

export class App extends Component {
  state = {
    pictures: [],
    status: 'idle',
    error: null,
    search: '',
    page: 1,
  };
  handelSubmit = event => {
    event.preventDefault();
    const search = event.currentTarget.search.value.trim().toLowerCase();
    this.setState({ search });

    event.currentTarget.reset();
  };
  componentDidUpdate() {
    const fetchPicture = async () => {
      try {
        this.setState({ status: 'pending' });
        const pictures = await requestPicture(
          this.state.search,
          this.state.page,
          this.state.totalPage
        );

        this.setState({ pictures, status: 'success' });
      } catch (error) {
        this.setState({ error: error.message, status: 'error' });
      }
    };
    fetchPicture();
  }
  render() {
    const showPictures =
      this.state.status === 'success' && Array.isArray(this.state.pictures);
    const showPicturesEmpty = showPictures && this.state.pictures === 0;
    return (
      <>
        <SearchBar onSubmit={this.handelSubmit} />
        {this.state.status === 'pending' && <p>Loading...</p>}
        {this.state.status === 'error' && <p>ooops</p>}
        {showPicturesEmpty && <p>You still don't have any picture!</p>}

        {showPictures && <ImageGallery pictures={this.state.pictures} />}
      </>
    );
  }
}
