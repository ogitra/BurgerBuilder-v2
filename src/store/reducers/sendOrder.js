import * as actionTypes from '../actions/actionTypes';

const initialState = {
  ings: { salada: 0, carne: 0, queijo: 0, bacon: 0 },
  ordersList: [],
  redirect: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_ORDER_INGS:
      return {
        ...state,
        ings: action.ings,
        redirect: true,
      };
    case actionTypes.SEND_ORDER:
      return {
        ...state,
        order: action.orderData,
        redirect: false,
      };
    case actionTypes.SET_REDIRECT_FALSE:
      return {
        ...state,
        redirect: false,
      };

    case actionTypes.FETCH_ORDERS:
      const orders = [];
      for (let key in action.orderListFromGet) {
        orders.push({
          id: key,
          name: action.orderListFromGet[key].Nome,
          street: action.orderListFromGet[key].Rua,
          number: action.orderListFromGet[key].Num,
          city: action.orderListFromGet[key].Bairro,
          ings: {
            meat: action.orderListFromGet[key].carne,
            salad: action.orderListFromGet[key].salada,
            bacon: action.orderListFromGet[key].bacon,
            cheese: action.orderListFromGet[key].queijo,
          },
          totalPrice: action.orderListFromGet[key].totalPrice,
        });
      }
      return {
        ...state,
        ordersList: orders,
      };

    default:
      return state;
  }
};

export default reducer;
