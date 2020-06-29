import React from 'react';
import classes from './modal.module.css';
import Button from '../button/button';

const Modal = (props) => {
  return (
    <div
      className={[classes.modal__container, props.classModalOpen && classes.modal__container__open].join(' ')}
      onClick={props.onClick}
    >
      <div className={classes.modal__summary}>
        <h2 className={classes.modal__summaryTitle}>{props.title}</h2>
        {props.children}

        <div className={classes.buttonGroup}>
          <Button
            buttonStyleType={'back'}
            buttonLabel={'Voltar'}
            onClick={props.onClickBackward}
            display={props.display}
          ></Button>
          <Button buttonStyleType={'forward'} buttonLabel={'Avançar'} onClick={props.onClickForward}></Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
