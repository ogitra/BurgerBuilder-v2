import React from 'react';
import classes from './oneCommand.module.css';

const OneCommand = (props) => {
  return (
    <div className={classes.oneCommand}>
      {props.logo}
      <p className={classes.oneCommand__name}> {props.ingName}</p>
      <button className={classes.oneCommand__inc} onClick={props.onClickInc}>
        +
      </button>
      <button
        className={[classes.oneCommand__dec, props.classNameAble ? ' ' : classes.oneCommand__decDisabled].join(' ')}
        onClick={props.onClickDec}
      >
        -
      </button>
      <p className={classes.commandQtd}>{props.qty}</p>
    </div>
  );
};

export default OneCommand;
