import React, { Fragment, useReducer } from "react";
import LogboekGewichtLijst from "./LogboekGewichtLijst";

import { validate, VALIDATOR_REQUIRE } from "../../../utils/validators";

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

const LogboekGewicht = (props) => {
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
    if (!inputState.isValid) return console.log("Vul aub geldige waardes in bij gewicht");
    console.log("Het gaat nu naar de database");
  };

  return (
    <Fragment>
      <div className="logboek__container">
        <div className="logboek__new__workout">
          <h2>Vul je gewicht in</h2>
          <form
            onSubmit={submitWorkoutHandler}
            className={`${!inputState.isValid && inputState.isTouched && "form__control__invalid"}`}
          >
            <input
              type="text"
              onBlur={touchHandler}
              onChange={inputChangeHandler}
              placeholder="Vul je gewicht in"
              value={inputState.value}
            />
            <textarea
              placeholder="Eventuele toelichting kcal iname cardio etc."
              rows="4"
              cols="20"
            />
            {!inputState.isValid && inputState.isTouched && <p>Vul aub iets in bij gewicht</p>}
            <button type="submit">Add Weight</button>
          </form>
        </div>

        <LogboekGewichtLijst items={props.items} />
      </div>
    </Fragment>
  );
};

export default LogboekGewicht;
