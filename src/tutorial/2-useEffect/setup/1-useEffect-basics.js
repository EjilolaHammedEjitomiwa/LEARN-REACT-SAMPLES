import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    value >= 1
      ? (document.title = `New message ${value}`)
      : (document.title = "Empty Message");

    // if (value > 0) {
    //   document.title = `New message ${value}`;
    // } else {
    //   document.title = "Empty Message"
    // }
  }, [value]);

  //by default the useEffect runs after every render
  // to run only once i.e after the first render then we passed an empty array [] as the second a
  //parameter
  //to run after a value  of a variable is changed or updated then we pass the variable name to the array
  //defined in the second parameter

  return (
    <>
      <h1> {value} </h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
