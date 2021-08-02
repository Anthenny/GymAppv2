import React from "react";
import { Link } from "react-router-dom";

const LogboekGewichtItem = (props) => {
  return (
    <li>
      <Link to={`/logboek/`}>
        <p>{props.gewicht}</p>
        <p>{props.datum}</p>
      </Link>
    </li>
  );
};

export default LogboekGewichtItem;
