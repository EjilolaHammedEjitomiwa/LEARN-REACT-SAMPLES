import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    return people.filter((person) => person.id === id);
  };

  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = (props) => {
  return (
    <>
      {props.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={props.removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = (props) => {
  return (
    <div className="item">
      <h4> {props.name} </h4>
      <button className="btn" onClick={() => props.removePerson(props.id)}>
        Remove
      </button>
    </div>
  );
};

export default PropDrilling;
