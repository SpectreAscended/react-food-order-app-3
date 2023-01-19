import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

const Cart = props => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const addItemHandler = item => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };

  const removeItemHandler = item => {
    cartCtx.removeItem(item.id);
  };

  const cartItems = items.map(item => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onAdd={addItemHandler.bind(null, item)}
        onRemove={removeItemHandler.bind(null, item)}
      />
    );
  });

  return (
    <Modal onShowModal={props.onShowModal}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${Math.abs(cartCtx.totalAmount.toFixed(2))}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onShowModal}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
