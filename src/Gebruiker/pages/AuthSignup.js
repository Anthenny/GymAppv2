import React from "react";
import { Link } from "react-router-dom";

import "../components/AuthLogin.css";

const AuthSignup = () => {
  return (
    <div className="auth">
      <div className="auth__form__container">
        <div className="auth__header">
          <h2>Welkom !</h2>
          <h4>Maak een account aan om door te gaan</h4>
        </div>
        <form action="">
          <input type="email" placeholder="Vul uw email in" />
          <input type="text" placeholder="Vul uw naam in" />
          <input type="password" placeholder="Vul uw wachtwoord in" />
          <input type="password" placeholder="Bevestig uw wachtwoord" />
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
