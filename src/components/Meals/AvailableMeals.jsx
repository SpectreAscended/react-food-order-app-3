import React from 'react';
import classes from './AvailableMeals.module.css';
import DUMMY_MEALS from '../../store/dummyData';
import Card from '../UI/Card';

console.log(DUMMY_MEALS);

const AvailableMeals = props => {
  const meals = DUMMY_MEALS.map(meal => <li key={meal.id}>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
