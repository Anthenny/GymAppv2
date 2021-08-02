import React from "react";

import GebruikersLijst from "../components/GebruikersLijst";

const Gebruikers = () => {
  const USERS = [
    {
      id: "u1",
      image: "https://i.im.ge/2021/08/02/Lzpc8.png",
      name: "Rock Johnson",
      workouts: 25,
      lastSeen: "1-8-2021",
    },
  ];

  return <GebruikersLijst items={USERS} />;
};

export default Gebruikers;
