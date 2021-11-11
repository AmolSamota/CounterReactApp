import React from "react";

const CounterComponent = (props) => {
  const { counter } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="fontSize12">Counter value : {counter}</div>
      </div>
    </div>
  );
};

export default CounterComponent;
