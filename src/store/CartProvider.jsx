import React, { useReducer } from 'react';
import CartContext from './cart-context';

const addItemToCartHandler = () => {};
const removeItemFromCartHandler = () => {};

const defaultCartState = {
  items: [
    {
      name: 'Pizza',
      amount: 2,
      price: 5.99,
    },
    {
      name: 'Lasagna',
      amount: 1,
      price: 19.99,
    },
  ],
  totalAmount: 65.99,
};

const cartReducer = (state, action) => {
  return defaultCartState;
};

const CartProvider = props => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
