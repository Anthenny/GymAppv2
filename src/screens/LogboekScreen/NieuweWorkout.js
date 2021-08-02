import React from "react";
import "./LogboekScreen.css";
const NieuweWorkout = () => {
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
      {/* Recent workout */}
      <div className="logboek__recent__workouts">
        <h2>Recent Workouts</h2>
        <div className="recent__workouts__header">
          <h3>Titel</h3>
          <h3>Datum</h3>
        </div>
        <div className="recent__workouts__body">
          <ul>
            <li>
              <p>Borst</p>
              <p>1-8-2021</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NieuweWorkout;
