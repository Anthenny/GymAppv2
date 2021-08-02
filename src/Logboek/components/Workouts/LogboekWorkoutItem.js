import React from "react";
import { Link } from "react-router-dom";

const LogboekWorkoutItem = (props) => {
  return (
    <li>
      <Link to={`/logboek/${props.id}`}>
        <p>{props.titel}</p>
        <p>{props.datum}</p>
      </Link>
    </li>
  );
};

export default LogboekWorkoutItem;
