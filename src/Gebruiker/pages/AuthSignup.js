import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import "../components/AuthLogin.css";

const AuthSignup = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const naamInputRef = useRef();
  const [file, setFile] = useState();
  const wachtwoordInputRef = useRef();
  const bevevstigWachtwoordInputRef = useRef();
  const { isLoading, error, sendRequest } = useHttpClient();

  const pickHandler = (e) => {
    let pickedFile;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setFile(pickedFile);
    }
    return pickedFile;
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredNaam = naamInputRef.current.value;
    const enteredFile = file;
    const enteredWachtwoord = wachtwoordInputRef.current.value;
    const enteredBevestigdWachtwoord = bevevstigWachtwoordInputRef.current.value;

    try {
      const formData = new FormData();
      formData.append("email", enteredEmail);
      formData.append("naam", enteredNaam);
      formData.append("image", enteredFile);
      formData.append("wachtwoord", enteredWachtwoord);
      formData.append("bevestigWachtwoord", enteredBevestigdWachtwoord);

      await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/gebruikers/signup`, "POST", formData);
      history.push("/login");
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
          <label htmlFor="img">Kies uw profiel foto(optioneel)</label>
          <input onChange={pickHandler} type="file" accept=".jpg, .png, .jpeg" id="img" />
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
