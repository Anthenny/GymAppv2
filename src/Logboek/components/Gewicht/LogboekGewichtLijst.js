import React from "react";

import LogboekGewichtItem from "./LogboekGewichtItem";

const LogboekGewichtLijst = (props) => {
  if (!props.items || props.items.length === 0) {
    return (
      <div className="logboek__recent__workouts">
        <h2>Recent Gewicht</h2>
        <div className="recent__workouts__header">
          <h4>Gewicht</h4>
          <h4>Datum</h4>
        </div>
        <div className="recent__workouts__body">
          <ul>
            <p>U heeft nog geen gewicht gelogd</p>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className="logboek__recent__workouts">
      <h2>Recent Gewicht</h2>
      <div className="recent__workouts__header">
        <h4>Gewicht</h4>
        <h4>Datum</h4>
      </div>
      <div className="recent__workouts__body">
        <ul>
          {props.items.map((gewicht) => (
            <LogboekGewichtItem
              key={gewicht._id}
              id={gewicht._id}
              gewicht={gewicht.titel}
              datum={gewicht.datum}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogboekGewichtLijst;
