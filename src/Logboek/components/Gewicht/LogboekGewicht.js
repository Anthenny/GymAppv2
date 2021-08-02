import React, { Fragment } from "react";
import LogboekGewichtLijst from "./LogboekGewichtLijst";

const LogboekGewicht = (props) => {
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

        <LogboekGewichtLijst items={props.items} />
      </div>
    </Fragment>
  );
};

export default LogboekGewicht;
