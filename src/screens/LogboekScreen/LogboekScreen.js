import React, { Fragment } from "react";
import Nav from "../../shared/components/Nav";
import SideBar from "../../shared/components/SideBar";
import NieuweWorkout from "./NieuweWorkout";
import NieuwGewicht from "./NieuwGewicht";

const LogboekScreen = () => {
  return (
    <Fragment>
      <Nav />
      <SideBar />
      <main>
        <NieuweWorkout />
        <NieuwGewicht />
      </main>
    </Fragment>
  );
};
export default LogboekScreen;
