import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const deletPerson = (id) => {
    // let newPeople = [];

    //using for loop
    //   for (const person of people) {
    //     if (person.id !== id) {
    //       newPeople.push(person);
    //     }
    //   }
    //   setPeople(newPeople);

    //using filter
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button className="btn" onClick={() => deletPerson(person.id)}>
              Remove
            </button>
          </div>
        );
      })}

      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear All
      </button>
    </>
  );
};

export default UseStateArray;
