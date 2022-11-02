import React from 'react';

import css from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ pictures, toggleModal }) => {
  return (
    pictures &&
    pictures.map(picture => (
      <li
        className={css.item}
        key={picture.id}
        onClick={() => toggleModal(picture.largeImageURL)}
      >
        <img
          className={css.image}
          src={picture.webformatURL}
          alt={picture.tag}
          width="300"
          height="200"
        />
      </li>
    ))
  );
};

export default ImageGalleryItem;
