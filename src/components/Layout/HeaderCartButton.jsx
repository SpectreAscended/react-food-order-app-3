import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../../assets/cartIcon';

const HeaderCartButton = props => {
  return (
    <button className={classes.button} onClick={props.onShowModal}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      <span>Your Cart</span>
      <span className={classes.badge}>2</span>
    </button>
  );
};

export default HeaderCartButton;
