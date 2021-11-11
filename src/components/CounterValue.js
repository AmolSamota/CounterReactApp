import React, { useState, useEffect } from "react";
import CounterComponent from "./CounterComponent";
// import styles from "./index.module.css";
const counterApi = require("../routes/counterRoutes");

const CounterValue = () => {
  const [counter, setCounter] = useState(null);
  const [loader, setLoader] = useState(false);

  const Change = async (e) => {
    try {
      setLoader(true);
      let newCounter = counter;
      if (e.target.innerText === "-") {
        newCounter--;
      } else {
        newCounter++;
      }
      const response = await counterApi.updateCounter(newCounter);
      if (response === null || response <= 0) {
        setCounter(1);
      } else if (response >= 1000) {
        setCounter(1000);
      } else {
        setCounter(response);
      }
      console.log(response, "changed_val");
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoader(true);
        const response = await counterApi.fetchCounter();
        let counter =
          response === null || response <= 0
            ? 1
            : response >= 1000
            ? 1000
            : response;
        setCounter(counter);
        setLoader(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
    setLoader(true);
  }, []);

  // component banansa
  // styling
  // loader
  // input tag
  // remove console log

  // -- ternary operator
  // className

  return (
    <div>
      <div className="container">
        <div className="row">
          {loader && (
            <>
              <div className="loading loading--full-height"> </div>
              <div className="fontSize12">&nbsp; Saving counter value</div>
            </>
          )}
        </div>
        <div className="row">
          <button onClick={Change} className="buttonStyles buttonMinusStyles">
            <div className="fontSize16">-</div>
          </button>
          <input
            className="counterInputBox"
            type="text"
            onChange={Change}
            value={counter}
          />
          <button onClick={Change} className="buttonStyles buttonPlusStyles">
            <div className="fontSize16">+</div>
          </button>
        </div>
        <div className="row">
          <CounterComponent counter={counter}></CounterComponent>
        </div>
      </div>
    </div>
  );
};

export default CounterValue;
