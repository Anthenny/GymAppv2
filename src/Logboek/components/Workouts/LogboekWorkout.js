import React from "react";

import LogboekWorkoutList from "./LogboekWorkoutLijst";
const LogboekWorkout = (props) => {
  return (
    <div className="logboek__container">
      <div className="logboek__new__workout">
        <h2>Nieuwe Workout !</h2>
        <form>
          <input type="text" placeholder="Titel" />
          <textarea placeholder="Beschrijf jouw workout" rows="4" cols="20" />
          <button type="submit">Add Workout</button>
        </form>
      </div>

      <LogboekWorkoutList items={props.items} />
    </div>
  );
};

export default LogboekWorkout;
