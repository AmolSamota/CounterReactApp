import React from "react";

const CounterComponent = (props) => {
  const { counter } = props;
  console.log(props, "s");
  return (
    <div className="fontSize12">
      counter value <br />
      {counter}
    </div>
  );
};

export default CounterComponent;
