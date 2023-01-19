import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const cartItems = [...state.items];
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = cartItems.findIndex(
      item => item.id === action.item.id
    );
    let updatedItems;

    const existingCartItem = cartItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = cartItems;
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = [
        ...cartItems,
        {
          id: action.item.id,
          name: action.item.name,
          price: action.item.price,
          amount: action.item.amount,
        },
      ];
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    let updatedItems;
    let updatedTotal;
    const existingItemIndex = state.items.findIndex(
      item => item.id === action.id
    );

    const existingItem = state.items[existingItemIndex];
    if (state.items[existingItemIndex].amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      (updatedItems = [...state.items]),
        (updatedItems[existingItemIndex] = updatedItem);
    }
    updatedTotal = state.totalAmount - existingItem.price;
    return {
      items: updatedItems,
      totalAmount: updatedTotal,
    };
  }

  return defaultCartState;
};

const CartProvider = props => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = item => {
    dispatchCartState({ type: 'ADD_ITEM', item: item });
  };

  const removeItemFromCartHandler = id => {
    dispatchCartState({ type: 'REMOVE_ITEM', id: id });
  };

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
