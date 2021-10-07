import React, { useState } from "react";

const UseStateBasics = () => {
  const [titleText, setTitleText] = useState("Default Title");

  const handleClick = () => {
    if (titleText === "Default Title") {
      setTitleText("Geo Developer");
    } else {
      setTitleText("Default Title");
    }
  };

  return (
    <React.Fragment>
      <h1>{titleText}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
