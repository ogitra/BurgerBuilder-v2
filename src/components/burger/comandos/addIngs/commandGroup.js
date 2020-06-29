import React, { useState } from 'react';
import classes from './commandGroup.module.css';
import OneCommand from './oneCommand/oneCommand';
import { FaCheese, FaBacon, FaCookie } from 'react-icons/fa';
import { GiTomato } from 'react-icons/gi';

const CommandGroup = (props) => {
  const [commands] = useState([
    { id: 1, ing: 'carne', logo: <FaCookie /> },
    { id: 2, ing: 'salada', logo: <GiTomato /> },
    { id: 3, ing: 'bacon', logo: <FaBacon /> },
    { id: 4, ing: 'queijo', logo: <FaCheese /> },
  ]);

  return (
    <div className={classes.commandsIngs__container}>
      {commands.map((item) => {
        return (
          <OneCommand
            key={item.id}
            ingName={item.ing.charAt(0).toUpperCase() + item.ing.slice(1)}
            logo={item.logo}
            onClickInc={() => props.onClickInc(item.ing)}
            onClickDec={() => props.onClickDec(item.ing)}
            classNameAble={props.classNameAble[item.ing]}
            qty={props.qty[item.ing]}
          />
        );
      })}
    </div>
  );
};

export default CommandGroup;
