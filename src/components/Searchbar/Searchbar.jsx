import { useState } from 'react';
import { toast } from 'react-toastify';
import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';

import css from './searchbar.module.css';

const Searchbar = ({ onQuery }) => {
  const [query, setQuery] = useState('');

  const handelQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return toast.warn('Your field is empty!', {
        position: 'top-right',
        autoClose: 2500,
        closeOnClick: true,
      });
    }
    setQuery('');
    onQuery(query);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.btn} type="submit">
          <BiSearchAlt2 className={css.buttonLabel} />
        </button>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          value={query}
          placeholder="Search images and photos"
          onChange={handelQueryChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onQuery: PropTypes.func.isRequired,
};
