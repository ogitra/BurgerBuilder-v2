import React from 'react';
import classes from './button.module.css';

const Button = (props) => {
  return (
    <button
      className={[classes.button, props.buttonStyleType === 'back' ? classes.buttonBack : classes.buttonForward].join(
        ' '
      )}
      onClick={props.onClick}
      style={{ display: props.display }}
    >
      {props.buttonLabel}
    </button>
  );
};

export default Button;
