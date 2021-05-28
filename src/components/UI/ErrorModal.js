import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import style_classes from "./ErrorModal.module.css";

const BackDrop = (props) => {
  return <div className={style_classes.backdrop} onClick={props.onConfirm} />;
};

const EModal = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <EModal
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
