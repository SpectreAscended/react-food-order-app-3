import React, { useState } from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import headerImg from '../../assets/meals.jpg';
import Cart from '../Cart/Cart';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModalHandler = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowModal={toggleModalHandler} />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImg} alt="A table with a variety of delicious foods" />
      </div>
      {showModal && <Cart onShowModal={toggleModalHandler} />}
    </>
  );
};

export default Header;
