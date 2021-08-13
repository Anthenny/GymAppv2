import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../shared/context/auth-context";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "../components/AuthLogin.css";

const AuthLogin = () => {
  const auth = useContext(AuthContext);
  const emailInputRef = useRef();
  const wachtwoordInputRef = useRef();
  const { isLoading, error, sendRequest } = useHttpClient();

  const submitLoginHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredWachtwoord = wachtwoordInputRef.current.value;

    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/gebruikers/login`,
        "POST",
        JSON.stringify({
          email: enteredEmail,
          wachtwoord: enteredWachtwoord,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      auth.login(responseData.gebruikerId, responseData.gebruiker, responseData.token);
    } catch (err) {}
  };

  return (
    <div className="auth">
      {isLoading && <LoadingSpinner asOverlay />}
      <div className="auth__form__container">
        <div className="auth__header">
          <h2>Welkom terug !</h2>
          <h4>Log in om door te gaan</h4>
          {error && <p className="error__msg">{error}</p>}
        </div>
        <form onSubmit={submitLoginHandler}>
          <input type="email" ref={emailInputRef} placeholder="Vul uw email in" />
          <input type="password" ref={wachtwoordInputRef} placeholder="Vul uw wachtwoord in" />
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
