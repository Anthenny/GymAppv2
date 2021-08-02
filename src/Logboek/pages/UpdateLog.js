import React, { Fragment, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useParams } from "react-router";

import Logboek from "./Logboek";
import "../components//UpdateLog.css";

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

const UpdateLog = () => {
  const history = useHistory();
  const logId = useParams().logId;
  const identifiedLog = DUMMYWORKOUTLOGS.find((workout) => workout.id === logId);
  const [input, setInput] = useState(identifiedLog.titel);
  const [textarea, setTextarea] = useState(identifiedLog.beschrijving);

  if (!identifiedLog) return <h2> Kon deze workout niet vinden</h2>;

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const textareaHandler = (e) => {
    setTextarea(e.target.value);
  };

  const submitUpdateFormHandler = (e) => {
    e.preventDefault();
  };

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
        <h2>Update {identifiedLog.titel}</h2>
        <div className="updateLog__update__velden">
          <form onSubmit={submitUpdateFormHandler}>
            <input type="text" value={input} onChange={inputHandler} />
            <textarea value={textarea} onChange={textareaHandler} rows="4" cols="20" />
            <button type="submit" className="btn update">
              Update
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateLog;
