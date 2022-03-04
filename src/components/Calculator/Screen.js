import React, { useState } from "react";
import "./Screen.css";
export default function Screen(props) {
  const [screenContent, setScreenContent] = useState(props.content);
  console.log(props.content);
  console.log(screenContent);
  //setScreenContent(props.content);
  const handleDigitsAndSymbols = () => {
    const digitsandsymbols = props.content;
    console.log(digitsandsymbols);
    return digitsandsymbols;
  };
  return <div id="screen">{screenContent}</div>;
}
