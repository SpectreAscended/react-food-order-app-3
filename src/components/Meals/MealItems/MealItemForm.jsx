import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props => {
  const [input, setInput] = useState('');

  const inputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    setInput(inputRef.current.value);
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
    </form>
  );
};

export default MealItemForm;
