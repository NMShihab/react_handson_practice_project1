import React from "react";
import style_clases from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={style_clases.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
