import React from "react";

import { Link } from "react-router-dom";

import "./Gebruikers.css";

const GebruikerItem = (props) => {
  return (
    <li>
      <Link to={`/${props.id}/logs`}>
        <div className="user__info">
          <img src={props.image} alt={props.name} />
          <p>{props.name}</p>
        </div>
      </Link>

      <div className="user__seen">
        <p>{props.lastSeen}</p>
      </div>
    </li>
  );
};

export default GebruikerItem;
