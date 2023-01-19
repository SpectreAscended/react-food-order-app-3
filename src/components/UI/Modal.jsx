import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = props => {
  return <div className={classes.modal}>{props.children}</div>;
};

const parentElement = document.getElementById('overlay-root');

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, parentElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        parentElement
      )}
    </>
  );
};

export default Modal;
