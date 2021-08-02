import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import Logboek from "./Logboek";
import "../components/LogboekSpecifiek.css";

const LogboekSpecifiek = () => {
  const history = useHistory();

  const closeModalHandler = () => {
    history.push("/");
  };
  return (
    <Fragment>
      <div className="BG__OVERLAY" />
      <Logboek />
      <div className="userLogs__modal">
        <div onClick={closeModalHandler} className="kruis">
          X
        </div>
        <h2>Chest</h2>
        <div className="workout__area">
          <p>Bench Press</p>
        </div>
        <div className="buttons">
          <button className="btn update">Update</button>
          <button className="btn delete">Delete</button>
        </div>
      </div>
    </Fragment>
  );
};

export default LogboekSpecifiek;
