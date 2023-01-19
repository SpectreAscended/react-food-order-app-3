import React from 'react';
import classes from './AvailableMeals.module.css';
import DUMMY_MEALS from '../../store/dummyData';
import Card from '../UI/Card';
import MealItem from './MealItems/MealItem';

console.log(DUMMY_MEALS);

const AvailableMeals = props => {
  const meals = DUMMY_MEALS.map(meal => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      id={meal.id}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
