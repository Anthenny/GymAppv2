import React from "react";

import { Link } from "react-router-dom";

import "./Gebruikers.css";

const GebruikerItem = (props) => {
  return (
    <li>
      {/* <Link to={`/${props.id}/logs`}> */}
      <div className="user__info">
        <img src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={props.naam} />
        <p>{props.naam}</p>
      </div>
      {/* </Link> */}

      <div className="user__seen">
        <p>{props.laatstGezien}</p>
      </div>
    </li>
  );
};

export default GebruikerItem;
