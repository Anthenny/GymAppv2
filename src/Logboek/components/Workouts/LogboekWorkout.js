import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import { useHttpClient } from "../../../shared/hooks/http-hook";
import { AuthContext } from "../../../shared/context/auth-context";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";

import LogboekWorkoutLijst from "./LogboekWorkoutLijst";

const LogboekWorkout = (props) => {
  const history = useHistory();
  const auth = useContext(AuthContext); // listener die luisterd naar variabelen binnen in authContext.
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const titelInputRef = useRef();
  const beschrijvingInputRef = useRef();

  const submitWorkoutHandler = async (e) => {
    e.preventDefault();
    clearError();
    const enteredTitel = titelInputRef.current.value;
    const enteredBeschrijving = beschrijvingInputRef.current.value;

    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/logboek`,
        "POST",
        JSON.stringify({
          titel: enteredTitel,
          beschrijving: enteredBeschrijving,
          maker: auth.gebruikerId,
          categorie: "workout",
          datum: "10-8-2021",
        }),
        { "Content-Type": "application/json", Authorization: "Bearer " + auth.token }
      );
      history.push("/Deez"); // Gebruik gemaakt van redirect in app.js zodat die automatisch de pagina refresht
    } catch (err) {}
  };

  return (
    <div className="logboek__container">
      {isLoading && <LoadingSpinner asOverlay />}
      <div className="logboek__new__workout">
        <h2>Nieuwe Workout !</h2>
        {error && <p>{error}</p>}
        <form onSubmit={submitWorkoutHandler}>
          <input type="text" ref={titelInputRef} placeholder="Titel" />
          <textarea
            placeholder="Beschrijf jouw workout"
            ref={beschrijvingInputRef}
            rows="4"
            cols="20"
          />
          <button type="submit">Add Workout</button>
        </form>
      </div>

      <LogboekWorkoutLijst items={props.items} />
    </div>
  );
};

export default LogboekWorkout;
