import React from "react";

import UserLogsitem from "./UserLogsItem";

const UserLogsLijst = (props) => {
  return (
    <ul>
      {props.items.map((workout) => (
        <UserLogsitem name={workout.owner} titel={workout.titel} datum={workout.datum} />
      ))}
    </ul>
  );
};

export default UserLogsLijst;
