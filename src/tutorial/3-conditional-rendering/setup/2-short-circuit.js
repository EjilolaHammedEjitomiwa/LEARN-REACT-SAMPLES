import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("GeoDev");
  const [isError, setIsError] = useState(false);

  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      <h1> {text || "Default text"} </h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error......</h1>}
      {isError ? <p>Error is true</p> : <p>Error is false</p>}
    </>
  );
};

export default ShortCircuit;
