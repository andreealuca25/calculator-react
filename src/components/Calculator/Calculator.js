import React, { useState } from "react";
import Button from "../Button/Button";
import Screen from "./Screen";
import "./Calculator.css";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

export default function Calculator() {
  const [calc, setCalc] = useState({
    sign: "",
    number: 0,
    result: 0,
  });

  console.log(calc);
  const numClickHandler = (buttonValue) => {
    console.log(buttonValue);
    if (!calc.sign)
      setCalc({ ...calc, number: Number(calc.number + "" + buttonValue) });
    else setCalc({ ...calc, number: buttonValue });
  };

  const signClickHandler = (buttonValue) => {
    if (calc.number)
      setCalc({ ...calc, sign: buttonValue, result: calc.number });
    else setCalc({ ...calc, sign: buttonValue });
  };

  const clearClickHandler = () => {
    setCalc({ sign: "", number: 0, result: 0 });
  };
  const equalsClickHandler = () => {
    const a = calc.result;
    const b = calc.number;
    if (calc.number && calc.result) {
      switch (calc.sign) {
        case "+":
          setCalc({ ...calc, sign: "", number: 0, result: a + b });
          break;
        case "*":
          setCalc({ ...calc, sign: "", number: 0, result: a * b });
          break;
        case "-":
          setCalc({ ...calc, sign: "", number: 0, result: a - b });
          break;
        case "/":
          if (b != 0) setCalc({ ...calc, sign: "", number: 0, result: a / b });
          else alert("Can't divide by zero");
          break;
        case "%":
          setCalc({ ...calc, sign: "", number: 0, result: a % b });
          break;
        case "+-":
          setCalc({ ...calc, sign: "", number: 0, result: a + b * -1 });
          break;
      }
    }
  };

  const commaClickHandler = (buttonValue) => {
    setCalc({
      ...calc,
      number: !calc.number.toString().includes(".") //if the number doesn't already have a comma
        ? calc.number + buttonValue
        : calc.number,
    });
  };

  return (
    <div className="calculator-surface">
      <div id="screen">{calc.number ? calc.number : calc.result}</div>
      <div className="key-values">
        {btnValues.flat().map((btn, mapIndex) => {
          return (
            <Button
              key={mapIndex}
              class="key"
              calculatorKey={btn}
              onClickButton={
                btn === "C"
                  ? clearClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" ||
                    btn === "*" ||
                    btn === "-" ||
                    btn === "+" ||
                    btn === "%" ||
                    btn === "+-"
                  ? signClickHandler
                  : btn === "."
                  ? commaClickHandler
                  : numClickHandler
              }
            />
          );
        })}
      </div>
    </div>
  );
}
