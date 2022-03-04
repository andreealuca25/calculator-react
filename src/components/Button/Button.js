import React from "react";
import "./Button.css";
export default function Button(props) {
  return (
    <button
      className={props.class}
      onClick={() => {
        props.onClickButton(props.calculatorKey);
      }}
    >
      {props.calculatorKey}
    </button>
  );
}
