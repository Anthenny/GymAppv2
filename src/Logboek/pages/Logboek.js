import React, { Fragment } from "react";

import LogboekWorkout from "../components/Workouts/LogboekWorkout";
import LogboekGewicht from "../components/Gewicht/LogboekGewicht";

import "../components/Logboek.css";

const Logboek = () => {
  const WORKOUTLOGS = [
    {
      id: "l1",
      titel: "Borst",
      datum: "1-8-2021",
    },
  ];

  const GEWICHTLOGS = [
    {
      id: "g1",
      gewicht: "90 KG",
      datum: "1-8-2021",
    },
  ];

  return (
    <Fragment>
      <main>
        <LogboekWorkout items={WORKOUTLOGS} />
        <LogboekGewicht items={GEWICHTLOGS} />
      </main>
    </Fragment>
  );
};

export default Logboek;
