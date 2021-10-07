import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: "Geo",
    age: 23,
    message: "A software Developer",
  }); 

  const changeMessage = () => {
    setPerson({ ...person, message: "Android and Web Engineer" });
  };
  
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
