import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItem = [...state.people, action.payload];
    return {
      ...state,
      people: newItem,
      isModalOpen: true,
      modalContent: "Item added",
    };
  }

  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "Please enter value" };
  }

   if (action.type === "CLOSE_MODAL") {
     return { ...state, isModalOpen: false, modalContent: "Please enter value" };
   }

  throw new Error("No matching action type");
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "Hello world",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPeople = { id: Date.now().toString, name: name };
      dispatch({ type: "ADD_ITEM", payload: newPeople });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({type:'CLOSE_MODAL'})
  };


  return (
    <>
      {state.isModalOpen && <Modal  closeModal = {closeModal} modalContent={state.modalContent} />}

      <form action="" onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Add
        </button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
