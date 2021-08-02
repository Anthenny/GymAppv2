import React from "react";

const GebruikerItem = (props) => {
  return (
    <li>
      <div className="user__info">
        <img src={props.image} alt={props.name} />
        <p>{props.name}</p>
      </div>
      <div className="user__seen">
        <p>{props.lastSeen}</p>
      </div>
    </li>
  );
};

export default GebruikerItem;
