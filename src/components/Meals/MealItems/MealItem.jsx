import React, { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = props => {
  const cartCtx = useContext(CartContext);

  const price = props.price.toFixed(2);

  const addToCart = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${price}</div>
      </div>
      <MealItemForm id={props.id} onAddToCart={addToCart} />
    </li>
  );
};

export default MealItem;
