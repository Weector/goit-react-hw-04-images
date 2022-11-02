import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
      console.log('click');
    }
  };

  handelBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };

  render() {
    return createPortal(
      <div className={css.modal__backdrop} onClick={this.handelBackdropClick}>
        <div className={css.modal__content}>
          <img
            src={this.props.bigImgUrl}
            alt="Modal open"
            width="800"
            height="600"
          />
        </div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  bigImgUrl: PropTypes.string.isRequired,
};
