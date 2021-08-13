import React, { Fragment, useState, useEffect, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

import Logboek from "./Logboek";
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import "../components//UpdateLog.css";
import { AuthContext } from "../../shared/context/auth-context";

const UpdateLog = () => {
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttpClient();
  const [specifiekeLog, setSpecifiekeLog] = useState();
  const titelInputRef = useRef();
  const beschrijvingInputRef = useRef();
  const history = useHistory();
  const logId = useParams().logId;

  useEffect(() => {
    const fetchLog = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/logboek/${logId}`
        );
        setSpecifiekeLog(responseData.log);
      } catch (err) {}
    };
    fetchLog();
  }, [sendRequest, logId]);

  if (!specifiekeLog) return <h2> Kon deze workout niet vinden</h2>;

  const submitUpdateFormHandler = async (e) => {
    e.preventDefault();
    const enteredTitel = titelInputRef.current.value;
    const enteredBeschrijving = beschrijvingInputRef.current.value;

    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/logboek/${logId}`,
        "PATCH",
        JSON.stringify({
          titel: enteredTitel,
          beschrijving: enteredBeschrijving,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      history.push("/");
    } catch (err) {}
  };

  const closeModalHandler = () => {
    history.push("/");
  };

  return (
    <Fragment>
      <div className="BG__OVERLAY" />
      <Logboek />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && specifiekeLog && (
        <div className="userLogs__modal">
          <div onClick={closeModalHandler} className="kruis">
            X
          </div>
          <h2>Update {specifiekeLog.titel}</h2>
          <div className="updateLog__update__velden">
            <form onSubmit={submitUpdateFormHandler}>
              <input defaultValue={specifiekeLog.titel} ref={titelInputRef} type="text" />
              <textarea
                defaultValue={specifiekeLog.beschrijving}
                ref={beschrijvingInputRef}
                rows="4"
                cols="20"
              />
              <button type="submit" className="btn update">
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default UpdateLog;
