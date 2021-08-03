import React, { useReducer } from "react";
import { Link } from "react-router-dom";

import { validate, VALIDATOR_REQUIRE } from "../../utils/validators";
import "../components/AuthLogin.css";

const emailReducer = (state, action) => {
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

const AuthLogin = () => {
  const [emailState, dispatch] = useReducer(emailReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });

  const emailChangeHandler = (e) => {
    dispatch({ type: "CHANGE", val: e.target.value, validators: [VALIDATOR_REQUIRE()] });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    if (!emailState.isValid) return console.log("Vul aub geldige waardes in.");
    console.log("u wordt ingelogd");
  };

  return (
    <div className="auth">
      <div className="auth__form__container">
        <div className="auth__header">
          <h2>Welkom terug !</h2>
          <h4>Log in om door te gaan</h4>
          {!emailState.isValid && emailState.isTouched && (
            <p className="error__msg">Vul aub iets in bij uw email</p>
          )}
        </div>
        <form onSubmit={submitLoginHandler}>
          <input
            type="email"
            onBlur={touchHandler}
            onChange={emailChangeHandler}
            placeholder="Vul uw email in"
          />
          <input type="password" placeholder="Vul uw wachtwoord in" />
          <button type="submit">Log in</button>
          <p>
            Heb je geen account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthLogin;
