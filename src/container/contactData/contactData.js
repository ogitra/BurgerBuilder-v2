import React, { useState, useEffect } from 'react';
import classes from './contactData.module.css';
import Input from '../../components/UI/input/input';
import Button from '../../components/UI/button/button';
import Modal from '../../components/UI/modal/modal';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const ContactData = (props) => {
  const [userData, setUserData] = useState({
    Nome: '',
    Telefone: '',
    Rua: '',
    Num: '',
    Bairro: '',
    Cep: '',
  });

  useEffect(() => {
    props.setRedirectToFalse();
  }, []);

  const [showModal, setShowModal] = useState(false);

  function onChangeHandler(evt, itemName) {
    let newState = { ...userData };
    newState[itemName] = evt.target.value;

    setUserData(newState);
  }

  function sendOrderDataHandler(evt) {
    evt.preventDefault();
    const ingsForPost = props.addedIngs;
    const order = { ...userData, ...ingsForPost };
    props.sendOrder(order);
  }

  const userDatatoArrayMap = [];
  for (let key in userData) {
    userDatatoArrayMap.push(key);
  }

  const showModalHandler = () => {
    setShowModal(true);
  };

  const redirectToMainPageHandler = () => props.history.replace('/');

  return (
    <div className={classes.contactData__container}>
      <h1>Faça seu cadastro</h1>
      <form className={classes.contactData__formContainer} onSubmit={sendOrderDataHandler}>
        {userDatatoArrayMap.map((item) => {
          return <Input name={item} onChange={(evt) => onChangeHandler(evt, item)} />;
        })}
        <Button buttonStyleType={'back'} buttonLabel={'Enviar'} onClick={showModalHandler}></Button>
      </form>

      <Modal
        classModalOpen={showModal}
        title='Pedido enviado com sucesso!'
        onClickForward={redirectToMainPageHandler}
        display={'none'}
      ></Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    addedIngs: state.ings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendOrder: (order) => dispatch(actions.asyncSendOrder(order)),
    setRedirectToFalse: () => dispatch(actions.setRedirectToFalse()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);
