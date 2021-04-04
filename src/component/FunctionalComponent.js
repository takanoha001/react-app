import React from "react";

const FunctionalComponent = (props) => {
  const [countA, setCountA] = React.useState(props.countA || 1);
  const [countB, setCountB] = React.useState(props.countB || 10);
  const onClickHandlerA = () => setCountA((countA) => countA + 1); // 注釈 ホントはmemo化するべき
  const onClickHandlerB = () => setCountB((countB) => countB + 1);

  return (
    <div>
      <h2>FunctionalComponent.js</h2>
      <div>
        countA: {countA} <button onClick={onClickHandlerA}>Click!</button>
      </div>

      <div>
        countB: {countB} <button onClick={onClickHandlerB}>Click!</button>
      </div>
      <div>propsOnlyValue: {props.propsOnlyValue}</div>
      <div>{props.children}</div>
    </div>
  );
};

export default FunctionalComponent;
