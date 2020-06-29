import React from 'react';
import classes from './input.module.css';

const Input = (props) => {
  return (
    <>
      <label className={classes.input__label}>{props.name}</label>
      <input className={classes.input} type='text' onChange={props.onChange} />
    </>
  );
};

export default Input;
