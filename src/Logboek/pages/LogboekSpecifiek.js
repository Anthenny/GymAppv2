import React, { Fragment, useEffect, useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { useParams } from "react-router";

import Logboek from "./Logboek";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import "../components/LogboekSpecifiek.css";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const LogboekSpecifiek = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest } = useHttpClient();
  const [specifiekeLog, setSpecifiekeLog] = useState();
  const logId = useParams().logId;
  const history = useHistory();

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

  const closeModalHandler = () => {
    history.push("/");
  };

  const deleteLogHandler = async () => {
    try {
      await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/logboek/${logId}`, "DELETE", null, {
        Authorization: "Bearer " + auth.token,
      });
      history.push("/deez");
    } catch (err) {}
    console.log("Deleted");
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
          {error && <h2>{error}</h2>}
          <h2>{specifiekeLog.titel}</h2>
          <div className="workout__area">
            <p>{specifiekeLog.beschrijving}</p>
          </div>
          <div className="buttons">
            <Link to={`/logboek/update/${specifiekeLog._id}`}>
              <button className="btn update">Update</button>
            </Link>
            <button onClick={deleteLogHandler} className="btn delete">
              Delete
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default LogboekSpecifiek;
