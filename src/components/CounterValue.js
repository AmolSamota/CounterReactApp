// IMPORTS
import React, { useState, useEffect } from "react";

// ROUTES
const counterApi = require("../routes/counterRoutes");

const CounterValue = (props) => {
  const [limit, setLimit] = useState(1000);
  const { counter, loader, setCounter, setLoader } = props;

  const LimitChange = async (e) => {
    let newLimit = e.target.value >= 0 ? Number(e.target.value) : 1000;
    setLimit(newLimit);
  };

  const Change = async (e) => {
    try {
      setLoader(true);
      let newCounter = counter;
      if (e.target.type === "number") {
        newCounter = e.target.value ? Number(e.target.value) : 0;
      } else {
        if (e.target.innerText === "-") {
          newCounter--;
        } else {
          newCounter++;
        }
      }
      const response = await counterApi.updateCounter(newCounter);
      if (response === null || response <= 0) {
        setCounter(0);
      } else if (response >= limit) {
        setCounter(limit);
      } else {
        setCounter(response);
      }
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
            : response >= limit
            ? limit
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

  return (
    <div>
      <div className="container">
        <div className="row fontSize12">
          Enter Counter Limit : &nbsp;
          <input
            type="number"
            className=""
            onChange={LimitChange}
            value={limit}
          ></input>
        </div>
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
            -
          </button>
          <input
            className="counterInputBox fontSize21"
            type="number"
            onChange={Change}
            value={counter}
          />
          <button onClick={Change} className="buttonStyles buttonPlusStyles">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterValue;
