import { Component } from 'react';
import { toast } from 'react-toastify';
import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';

import css from './searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handelQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      return toast.warn('Your field is empty!', {
        position: 'top-right',
        autoClose: 2500,
        closeOnClick: true,
      });
    }
    this.setState({ query: '' });
    this.props.onQuery(this.state.query);
  };

  render() {
    return (
      <header className={css.header}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button className={css.btn} type="submit">
            <BiSearchAlt2 className={css.buttonLabel} />
          </button>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            value={this.state.query}
            placeholder="Search images and photos"
            onChange={this.handelQueryChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;

Searchbar.propTypes = {
  onQuery: PropTypes.func.isRequired,
};
