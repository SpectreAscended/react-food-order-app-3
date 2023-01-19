import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props => {
  const [input, setInput] = useState('');
  const [amountIsValid, setAmountIsValid] = useState(true);

  const inputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
    }
    setAmountIsValid(true);
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          key: props.id,
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
        ref={inputRef}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && (
        <p style={{ color: 'red' }}>Please enter a valid amount (1-5)</p>
      )}
    </form>
  );
};

export default MealItemForm;
