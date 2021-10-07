import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    // return () => {
    //   window.removeEventListener("resize", checkSize);
    // };
  },[]);

  //the return prevents memory leaks which means calling the event listeners multiple times

  return (
    <>
      <h1>window</h1>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;
