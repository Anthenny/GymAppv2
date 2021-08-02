import React, { Fragment } from "react";
import { useHistory, Link } from "react-router-dom";
import { useParams } from "react-router";

import Logboek from "./Logboek";
import "../components/LogboekSpecifiek.css";

const DUMMYWORKOUTLOGS = [
  {
    id: "l1",
    owner: "Anthenny",
    ownerId: "u1",
    titel: "Borst",
    beschrijving:
      "Bench Press 20 KG warming up 40 KG warming up70 KG werk set 10x70KG werk set 10x Incline Bench 60 KG werk set 10x 60 KG werk set 8x60 KG werk set 6x",
    datum: "1-8-2021",
  },
  {
    id: "l2",
    owner: "Olaf",
    ownerId: "u2",
    titel: "Benen",
    beschrijving:
      "Bench Press 20 KG warming up 40 KG warming up70 KG werk set 10x70KG werk set 10x Incline Bench 60 KG werk set 10x 60 KG werk set 8x60 KG werk set 6x",
    datum: "1-8-2021",
  },
];

const LogboekSpecifiek = () => {
  const LogId = useParams().logId;
  const identifiedLog = DUMMYWORKOUTLOGS.find((log) => log.id === LogId);
  const history = useHistory();

  const closeModalHandler = () => {
    history.push("/");
  };

  const deleteLogHandler = () => {
    console.log("Deleted");
  };

  return (
    <Fragment>
      <div className="BG__OVERLAY" />
      <Logboek />
      <div className="userLogs__modal">
        <div onClick={closeModalHandler} className="kruis">
          X
        </div>
        <h2>{identifiedLog.titel}</h2>
        <div className="workout__area">
          <p>{identifiedLog.beschrijving}</p>
        </div>
        <div className="buttons">
          <Link to={`/logboek/update/${identifiedLog.id}`}>
            <button className="btn update">Update</button>
          </Link>
          <button onClick={deleteLogHandler} className="btn delete">
            Delete
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default LogboekSpecifiek;
