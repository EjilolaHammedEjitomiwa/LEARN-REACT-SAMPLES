import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Show / Hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    
    //clean up function to prevent multiple event listeners
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div style={divStyle}>
      <h1>window</h1>
      <h2>Size: {size} px</h2>
    </div>
  );
};

const divStyle = {
  margingTop: "2rem",
};

export default ShowHide;
