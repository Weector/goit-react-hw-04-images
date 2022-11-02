import PropTypes from 'prop-types';

import css from './button.module.css';

const Button = ({ children, onClick }) => {
  return (
    <button className={css.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
