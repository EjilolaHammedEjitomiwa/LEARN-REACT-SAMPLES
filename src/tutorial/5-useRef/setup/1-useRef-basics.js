import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const usernameRefContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRefContainer.current.value);
  };

  useEffect(() => {

    
  });
  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            ref={usernameRefContainer}
            required
            placeholder="username"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
