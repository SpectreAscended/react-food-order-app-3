import React from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import headerImg from '../../assets/meals.jpg';
import Cart from '../Cart/Cart';

const Header = () => {
  return (
    <>
      <Cart />
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImg} alt="A table with a variety of delicious foods" />
      </div>
    </>
  );
};

export default Header;
