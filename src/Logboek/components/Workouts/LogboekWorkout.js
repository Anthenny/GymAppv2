import React, { useReducer } from "react";

import { validate, VALIDATOR_REQUIRE } from "../../../utils/validators";
import LogboekWorkoutList from "./LogboekWorkoutLijst";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }

    default:
      return state;
  }
};

const LogboekWorkout = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });

  const inputChangeHandler = (e) => {
    dispatch({ type: "CHANGE", val: e.target.value, validators: [VALIDATOR_REQUIRE()] });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const submitWorkoutHandler = (e) => {
    e.preventDefault();
    if (!inputState.isValid) return console.log("Vul aub geldige waardes in.");
    console.log("Het gaat nu naar de database");
  };

  return (
    <div className="logboek__container">
      <div className="logboek__new__workout">
        <h2>Nieuwe Workout !</h2>
        <form onSubmit={submitWorkoutHandler}>
          <input
            type="text"
            placeholder="Titel"
            onBlur={touchHandler}
            onChange={inputChangeHandler}
          />
          <textarea placeholder="Beschrijf jouw workout" rows="4" cols="20" />
          {!inputState.isValid && inputState.isTouched && <p>Vul aub iets in bij de titel</p>}
          <button type="submit">Add Workout</button>
        </form>
      </div>

      <LogboekWorkoutList items={props.items} />
    </div>
  );
};

export default LogboekWorkout;
