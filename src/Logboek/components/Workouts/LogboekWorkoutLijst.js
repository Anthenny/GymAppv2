import React from "react";
import LogboekWorkoutItem from "./LogboekWorkoutItem";

const LogboekWorkoutList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="logboek__recent__workouts">
        <h2>Recent Workouts</h2>
        <div className="recent__workouts__header">
          <h3>Titel</h3>
          <h3>Datum</h3>
        </div>
        <div className="recent__workouts__body">
          <ul>
            <p>U heeft nog geen workouts</p>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className="logboek__recent__workouts">
      <h2>Recent Workouts</h2>
      <div className="recent__workouts__header">
        <h3>Titel</h3>
        <h3>Datum</h3>
      </div>
      <div className="recent__workouts__body">
        <ul>
          {props.items.map((workout) => (
            <LogboekWorkoutItem
              key={workout.id}
              id={workout.id}
              titel={workout.titel}
              datum={workout.datum}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogboekWorkoutList;
