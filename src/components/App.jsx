import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';

import css from './app.module.css';

class App extends Component {
  state = {
    query: '',
    modal: false,
    bigImgUrl: null,
  };

  handelFormSubmit = query => {
    this.setState({ query });
  };

  toggleModal = url => {
    this.setState(({ modal }) => ({ modal: !modal, bigImgUrl: url }));
  };

  render() {
    const { bigImgUrl, query, modal } = this.state;
    const { handelFormSubmit, toggleModal } = this;
    return (
      <div className={css.container}>
        <Searchbar onQuery={handelFormSubmit} />
        <ImageGallery query={query} toggleModal={toggleModal} />
        {modal && <Modal toggleModal={toggleModal} bigImgUrl={bigImgUrl} />}
        <ToastContainer />
      </div>
    );
  }
}
export default App;
