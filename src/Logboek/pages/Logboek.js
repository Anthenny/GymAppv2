import React, { Fragment, useEffect, useState, useContext } from "react";

import LogboekWorkout from "../components/Workouts/LogboekWorkout";
import LogboekGewicht from "../components/Gewicht/LogboekGewicht";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import "../components/Logboek.css";

const Logboek = () => {
  // filter het in de backend in 2 verschillende json keys op gewicht en workout
  const auth = useContext(AuthContext);
  const [workoutLogs, setWorkoutLogs] = useState();
  const [gewichtLogs, setGewichtLogs] = useState();
  const { isLoading, sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/logboek/gebruiker/${auth.gebruikerId}`
        );

        setGewichtLogs(responseData.gebruikerGewichtLogs);
        setWorkoutLogs(responseData.gebruikerWorkoutLogs);
      } catch (err) {}
    };
    fetchLogs();
  }, [sendRequest, auth.gebruikerId]);

  return (
    <Fragment>
      <main>
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && <LogboekWorkout items={workoutLogs} />}
        {!isLoading && <LogboekGewicht items={gewichtLogs} />}
      </main>
    </Fragment>
  );
};

export default Logboek;
