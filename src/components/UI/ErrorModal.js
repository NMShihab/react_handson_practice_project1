import React from "react";
import Card from "./Card";
import Button from "./Button";
import style_classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={style_classes.backdrop} onClick={props.onConfirm} />
      <Card className={style_classes.modal}>
        <header className={style_classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style_classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={style_classes.actions}>
          <Button onClick={props.onConfirm}>Okey</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
