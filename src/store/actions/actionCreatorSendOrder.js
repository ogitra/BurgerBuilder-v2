import * as actionTypes from '../actions/actionTypes';
import axios from '../../components/axios/axios';

export const sendOrderIngs = (ings) => {
  return { type: actionTypes.SEND_ORDER_INGS, ings: ings };
};

export const sendOrder = (order) => {
  return { type: actionTypes.SEND_ORDER, orderData: order };
};

export const asyncSendOrder = (order) => {
  return (dispatch) => {
    axios.post('/orders.json', order).then(() => {
      dispatch(sendOrder(order));
    });
  };
};

export const fetchOrders = (orderListFromGet) => {
  return { type: actionTypes.FETCH_ORDERS, orderListFromGet: orderListFromGet };
};

export const asyncFetchOrders = () => {
  return (dispatch) => {
    axios.get('/orders.json').then((res) => {
      dispatch(fetchOrders(res.data));
    });
  };
};

export const setRedirectToFalse = () => {
  return { type: actionTypes.SET_REDIRECT_FALSE };
};
