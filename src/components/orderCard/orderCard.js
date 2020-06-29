import React from 'react';
import classes from './orderCard.module.css';

const OrderCard = (props) => {
  return (
    <div className={classes.orderCard__container}>
      <span className={classes.orderCard__orderNumber}> {props.orderNumber}</span>
      <p className={classes.orderCard__clientName}>{props.name}</p>
      <div className={classes.orderCard__address}>
        <p className={classes.orderCard__title}>Endereço</p>

        <p>
          <strong>Logradouro: </strong>
          {props.street}
        </p>
        <p>
          <strong>Nº: </strong>
          {props.number}
        </p>
        <p>
          <strong>Bairro: </strong>
          {props.city}
        </p>
      </div>

      <div className={classes.orderCard__ings}>
        <p className={classes.orderCard__title}>Pedido</p>
        <div>
          <p>
            <strong>Carne:</strong> {props.meat}
          </p>
          <p>
            <strong>Queijo:</strong> {props.cheese}
          </p>
        </div>
        <div>
          <p>
            <strong>Salada:</strong> {props.salad}
          </p>
          <p>
            <strong>Bacon:</strong> {props.bacon}
          </p>
        </div>
      </div>
      <div className={classes.orderCard__priceContainer}>
        <p className={classes.orderCard__title}>
          <strong>Preço</strong>
        </p>
        <p className={classes.orderCard__price}>{props.totalPrice},00</p>
      </div>
    </div>
  );
};

export default OrderCard;
