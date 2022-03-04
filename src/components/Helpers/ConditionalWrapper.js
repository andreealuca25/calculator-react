import React from "react";

export default function ConditionalWrapper(props) {
  console.log(props.index);
  return (
    <React.Fragment>
      {props.index % 4 == 0 && <div className="row">{props.children}</div>}
    </React.Fragment>
  );
}
