import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';

const Cart = props => {
  return (
    <Modal>
      <ul className={classes['cart-items']}>
        <CartItem name="Sushi" amount="1" price={12.99} />
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$65.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
