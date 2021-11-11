import React from "react";

const CounterComponent = (props) => {
  const { counter } = props;
  console.log(props, "s");
  return (
    <div>
      <b>
        counter value <br />
        {counter}
      </b>
    </div>
  );
};

export default CounterComponent;
