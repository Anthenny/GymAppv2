import React, { Fragment, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import LogboekGewichtLijst from "./LogboekGewichtLijst";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../../shared/context/auth-context";

const LogboekGewicht = (props) => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const gewichtInputRef = useRef();
  const beschrijvingInputRef = useRef();
  const { isLoading, error, clearError, sendRequest } = useHttpClient();

  const submitWorkoutHandler = async (e) => {
    e.preventDefault();
    clearError();
    const enteredGewicht = gewichtInputRef.current.value;
    const enteredBeschrijving = beschrijvingInputRef.current.value;

    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/logboek`,
        "POST",
        JSON.stringify({
          titel: enteredGewicht,
          beschrijving: enteredBeschrijving,
          maker: auth.gebruikerId,
          categorie: "gewicht",
          datum: "10-8-2021",
        }),
        { "Content-Type": "application/json", Authorization: "Bearer " + auth.token }
      );
      history.push("/Deez");
    } catch (err) {}
  };

  return (
    <Fragment>
      <div className="logboek__container">
        {isLoading && <LoadingSpinner asOverlay />}
        <div className="logboek__new__workout">
          <h2>Vul je gewicht in</h2>
          {error && <p>{error}</p>}
          <form onSubmit={submitWorkoutHandler}>
            <input type="text" ref={gewichtInputRef} placeholder="Vul je gewicht in" />
            <textarea
              placeholder="Eventuele toelichting kcal iname cardio etc."
              ref={beschrijvingInputRef}
              rows="4"
              cols="20"
            />
            <button type="submit">Add Weight</button>
          </form>
        </div>

        <LogboekGewichtLijst items={props.items} />
      </div>
    </Fragment>
  );
};

export default LogboekGewicht;
