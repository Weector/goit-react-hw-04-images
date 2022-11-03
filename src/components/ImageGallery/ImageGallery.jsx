import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { Button, ImageGalleryItem, Loader, loadImage } from '../index';

import css from './ImageGallery.module.css';

const ImageGallery = ({ query, toggleModal }) => {
  const [pictures, setPictures] = useState([]);
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState(true);

  const onHandleButtonClick = () => {
    setLoading(true);
    loadImage(query, counter + 1).then(resp => {
      setPictures([...pictures, ...resp.hits]);
      setCounter(counter + 1);
      setLoading(false);
      setMore(true);

      if (resp.totalHits === pictures.length) {
        setMore(false);
      }
    });
  };

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    loadImage(query, 1)
      .then(resp => {
        setPictures(resp.hits);
        setCounter(1);
        setLoading(false);
        setMore(true);
      })
      .catch(error => toast.error(error.message) && setLoading(false));
  }, [query]);

  return (
    <>
      {loading && <Loader className={css.loader} />}
      <ul className={css.list}>
        <ImageGalleryItem pictures={pictures} toggleModal={toggleModal} />
      </ul>
      {!!pictures?.length && pictures?.length > 11 && more && (
        <Button onClick={onHandleButtonClick}>Load More</Button>
      )}
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
