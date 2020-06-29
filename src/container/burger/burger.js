import React, { useState } from 'react';

import BurgerBuilder from '../../components/burger/burgerBuilder/burgerBuilder';
import CommandsAndPrice from '../../components/burger/comandos/commandsAndPrice';
import Modal from '../../components/UI/modal/modal';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Redirect } from 'react-router-dom';

const Burger = (props) => {
  const [ings, setIngs] = useState({ salada: 0, carne: 0, queijo: 0, bacon: 0 });
  const [price] = useState({ salada: 2, carne: 4, queijo: 2, bacon: 3 });
  const [totalPrice, setTotalPrice] = useState({ total: 0 });
  const [openModal, setOpenModal] = useState(false);

  function onIncHandler(ing) {
    const selectedIngs = { ...ings };
    const selectedTotalPrice = { ...totalPrice };
    selectedIngs[ing]++;
    selectedTotalPrice.total += price[ing];

    setTotalPrice(selectedTotalPrice);
    setIngs(selectedIngs);
  }

  function onDecHandler(ing) {
    const selectedIngs = { ...ings };
    const selectedTotalPrice = { ...totalPrice };
    selectedIngs[ing]--;
    selectedTotalPrice.total -= price[ing];
    if (selectedIngs[ing] < 0) {
      return;
    }

    setTotalPrice(selectedTotalPrice);
    setIngs(selectedIngs);
  }

  function openModalHandler() {
    setOpenModal(!openModal);
  }

  const ingsAddtoMap = [];

  for (let prop in ings) {
    for (let i = 0; i < ings[prop]; i++) {
      ingsAddtoMap.push(prop);
    }
  }

  const ingsToPost = { ...ings, totalPrice: totalPrice.total };

  return (
    <>
      <Modal
        classModalOpen={openModal}
        onClick={openModalHandler}
        onClickForward={() => props.sendOrderIngs(ingsToPost)}
        title={'Confira seu pedido'}
      >
        <BurgerBuilder ings={ingsAddtoMap}></BurgerBuilder>
        <p style={{ margin: '1rem 0', fontSize: '3rem', color: 'var(--theRed)' }}>R${totalPrice.total}</p>
        {props.redirect && <Redirect to='/contactData' />}
      </Modal>

      <BurgerBuilder ings={ingsAddtoMap} onClickButton={openModalHandler}>
        <FaArrowAltCircleRight
          className='item_style'
          style={{ marginLeft: '80%', width: '10%', height: '10%' }}
          onClick={openModalHandler}
        ></FaArrowAltCircleRight>
      </BurgerBuilder>

      <CommandsAndPrice
        onClickInc={onIncHandler}
        onClickDec={onDecHandler}
        classNameAble={ings}
        qty={ings}
        price={price}
        totalPrice={totalPrice.total}
      ></CommandsAndPrice>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    redirect: state.redirect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendOrderIngs: (ings) => dispatch(actions.sendOrderIngs(ings)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
