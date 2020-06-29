import React, { useState } from 'react';
import classes from './commandsAndPrice.module.css';
import CommandGroup from './addIngs/commandGroup';
import Price from './price/price';

const CommandsAndPrice = (props) => {
  const [showIngsCommands, setshowIngsOrPrice] = useState(true);

  let ingsOrPrice = showIngsCommands ? (
    <CommandGroup
      onClickInc={(ing) => props.onClickInc(ing)}
      onClickDec={(ing) => props.onClickDec(ing)}
      qty={props.qty}
      classNameAble={props.classNameAble}
    />
  ) : (
    <Price qty={props.qty} price={props.price} totalPrice={props.totalPrice}></Price>
  );

  return (
    <>
      <div className={classes.commands__container}>
        <div
          className={[classes.commands__label, showIngsCommands && classes.commands__labelActive].join(' ')}
          onClick={() => setshowIngsOrPrice(true)}
        >
          Ingredientes
        </div>
        <div
          className={[classes.commands__label, !showIngsCommands && classes.commands__labelActive].join(' ')}
          onClick={() => setshowIngsOrPrice(false)}
        >
          Preço - {props.totalPrice},00
        </div>
        {ingsOrPrice}
      </div>
    </>
  );
};

export default CommandsAndPrice;
