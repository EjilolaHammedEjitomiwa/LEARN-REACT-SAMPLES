import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let userID = Date.now().toString()

    const newUserData = {
      name: firstName,
      email: email,
      id: userID,
    };
    console.log(newUserData);

    setUsers([...user, newUserData]);
    
    // reset name and email
    setFirstName("");
    setEmail("");
  };

  return (
    <>
      <article>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="">Name: </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">email: </label>
            <input
              type="text"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn">
            Add Person
          </button>
        </form>

        {user.map((person) => {
          return (
            <div key={person.id} className="item">
              <h4>{person.name}</h4>
              <h5>{person.email}</h5>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
