import React from 'react';
import classes from './burgerBuilder.module.css';

const BurgerBuilder = (props) => {
  return (
    <div className={classes.burgerBuilder__container}>
      <div className={classes.burgerBuilder}>
        <div className={classes.burgerBuilder__breadTop}></div>
        {props.ings.map((item, arr) => {
          return <div className={classes[item]} key={arr}></div>;
        })}

        <div className={classes.burgerBuilder__breadBottom}></div>
      </div>
      {props.children}
    </div>
  );
};

export default BurgerBuilder;
