import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = React.useState(0);

  const increaseCounter = () => {
    let newValue = value;
    newValue++;
    setValue(newValue);
  };

  const decreaseCounter = () => {
    let newValue = value;
    newValue--;
    setValue(newValue);
  };

  const resetCounter = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value + 1);
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={sectionStyle}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>

        <button className="btn btn-block" onClick={decreaseCounter}>
          Decrease
        </button>
        <button className="btn" onClick={resetCounter}>
          RESET
        </button>
        <button className="btn" onClick={increaseCounter}>
          Increase
        </button>
      </section>

      <section style={sectionStyle}>
        <h2>More complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          {" "}
          Increase Later
        </button>
      </section>
    </>
  );
};

const sectionStyle = {
  margin: "4rem 0",
};

export default UseStateCounter;

