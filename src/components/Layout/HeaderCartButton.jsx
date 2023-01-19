import React, { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../../assets/cartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext);

  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

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
