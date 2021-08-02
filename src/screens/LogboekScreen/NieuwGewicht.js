import React, { Fragment } from "react";
import "./LogboekScreen.css";
const NieuwGewicht = () => {
  return (
    <Fragment>
      <div className="logboek__container">
        <div className="logboek__new__workout">
          <h2>Vul je gewicht in</h2>
          <form action="">
            <input type="text" placeholder="Vul je gewicht in" />
            <textarea
              placeholder="Eventuele toelichting kcal iname cardio etc."
              rows="4"
              cols="20"
            />
            <button type="submit">Add Weight</button>
          </form>
        </div>
        <div className="logboek__recent__workouts">
          <h2>Recent Gewicht</h2>
          <div className="recent__workouts__header">
            <h4>Gewicht</h4>
            <h4>Datum</h4>
          </div>
          <div className="recent__workouts__body">
            <ul>
              <li>
                <p>90 KG</p>
                <p>1-8-2021</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="logboek__BG" />
    </Fragment>
  );
};

export default NieuwGewicht;
