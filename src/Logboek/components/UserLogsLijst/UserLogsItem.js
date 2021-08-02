import React from "react";

const UserLogsItem = (props) => {
  return (
    <li>
      <p>{props.titel}</p>
      <p>{props.datum}</p>
    </li>
  );
};

export default UserLogsItem;
