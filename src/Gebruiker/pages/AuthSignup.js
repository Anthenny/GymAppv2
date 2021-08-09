import React, { useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import "../components/AuthLogin.css";

const AuthSignup = () => {
  const auth = useContext(AuthContext);
  const emailInputRef = useRef();
  const naamInputRef = useRef();
  const wachtwoordInputRef = useRef();
  const bevevstigWachtwoordInputRef = useRef();
  const { isLoading, error, sendRequest } = useHttpClient();

  const signupHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredNaam = naamInputRef.current.value;
    const enteredWachtwoord = wachtwoordInputRef.current.value;
    const enteredBevestigdWachtwoord = bevevstigWachtwoordInputRef.current.value;

    try {
      await sendRequest(
        "http://localhost:5000/api/gebruikers/signup",
        "POST",
        JSON.stringify({
          email: enteredEmail,
          naam: enteredNaam,
          wachtwoord: enteredWachtwoord,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      auth.login();
    } catch (err) {}
  };

  return (
    <div className="auth">
      {isLoading && <LoadingSpinner asOverlay />}
      <div className="auth__form__container">
        <div className="auth__header">
          <h2>Welkom !</h2>
          <h4>Maak een account aan om door te gaan</h4>
          {error && <p className="error__msg">{error}</p>}
        </div>
        <form onSubmit={signupHandler}>
          <input type="email" ref={emailInputRef} placeholder="Vul uw email in" />
          <input type="text" ref={naamInputRef} placeholder="Vul uw naam in" />
          <input type="password" ref={wachtwoordInputRef} placeholder="Vul uw wachtwoord in" />
          <input
            type="password"
            ref={bevevstigWachtwoordInputRef}
            placeholder="Bevestig uw wachtwoord"
          />
          <button type="submit">Sign up</button>
          <p>
            Heb je al een account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthSignup;
