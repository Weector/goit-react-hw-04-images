import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { ImageGallery, Searchbar, Modal } from './index';

import 'react-toastify/dist/ReactToastify.css';
import css from './app.module.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [bigImgUrl, setBigImgUrl] = useState(null);
  const [modal, setModal] = useState(false);

  const handelFormSubmit = query => {
    setQuery(query);
  };

  const toggleModal = url => {
    setModal(!modal);
    setBigImgUrl(url);
  };

  return (
    <div className={css.container}>
      <Searchbar onQuery={handelFormSubmit} />
      <ImageGallery query={query} toggleModal={toggleModal} />
      {modal && <Modal toggleModal={toggleModal} bigImgUrl={bigImgUrl} />}
      <ToastContainer />
    </div>
  );
};

export default App;
