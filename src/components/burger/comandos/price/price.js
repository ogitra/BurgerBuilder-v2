import React, { useState } from 'react';
import classes from './price.module.css';

const Price = (props) => {
  const [prices] = useState([
    { ing: 'carne', label: 'Hamburguer de carne' },
    { ing: 'queijo', label: 'Queijo prato' },
    { ing: 'bacon', label: 'Fatia de bacon' },
    { ing: 'salada', label: 'Salada de alface e tomate' },
  ]);

  return (
    <div className={classes.commandsPrice__container}>
      <table className={classes.commandsPrice__containerTable}>
        <tbody>
          <tr>
            <th>Ingredientes</th>
            <th> R$</th>
            <th>Qtd.</th>
          </tr>
          {prices.map((item) => {
            return (
              <tr key={item.ing}>
                <td>{item.label}</td>
                <td>{`${props.price[item.ing]},00`} </td>
                <td>{props.qty[item.ing]} </td>
              </tr>
            );
          })}
          <tr>
            <th>Total do Pedido:</th>
            <th colSpan='2'>R${props.totalPrice}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Price;
