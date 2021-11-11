// IMPORTS
import React, { useState } from "react";

// COMPONENTS
import CounterValue from "../components/CounterValue";
import CounterComponent from "../components/CounterComponent";

// GLOBAL STYLE SHEET
import "../styles/App.css";

const App = () => {
  const [counter, setCounter] = useState(null);
  const [loader, setLoader] = useState(false);
  return (
    <div className="App">
      <CounterValue
        counter={counter}
        loader={loader}
        setCounter={setCounter}
        setLoader={setLoader}
      ></CounterValue>
      <CounterComponent counter={counter}></CounterComponent>
    </div>
  );
};

export default App;
