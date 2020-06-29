import React, { useEffect } from 'react';
import classes from './orders.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import OrderCard from '../../components/orderCard/orderCard';

const Orders = (props) => {
  useEffect(() => {
    props.initOrders();
  }, []);

  return (
    <div className={classes.orders__container}>
      <h1>Seus Pedidos</h1>
      <ul>
        {props.orders.map((item, arr) => {
          return (
            <li key={item.id}>
              {
                <OrderCard
                  orderNumber={arr + 1}
                  name={item.name}
                  street={item.street}
                  number={item.number}
                  city={item.city}
                  meat={item.ings.meat}
                  cheese={item.ings.cheese}
                  salad={item.ings.salad}
                  bacon={item.ings.bacon}
                  totalPrice={item.totalPrice}
                ></OrderCard>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.ordersList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initOrders: () => dispatch(actions.asyncFetchOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
