import React, { Fragment } from "react";
import Nav from "../../shared/components/Nav";
import SideBar from "../../shared/components/SideBar";
import GebruikerItem from "./GebruikerItem";

const GebruikersLijst = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>Geen gebruikers gevonden</h2>
      </div>
    );
  }
  return (
    <Fragment>
      <Nav />
      <SideBar />
      <div className="gebruikerScreen">
        <div className="gebruikerScreen__container">
          <h2>Alle Gebruikers</h2>
          <h6>
            Hier kun je alle gebruikers zien die de app gebruiken. Als je hier ook tussen wilt staan
            moet je dit toestaan in jouw persoonlijke settings.
          </h6>
          <div className="gebruikersScreen__users">
            <div className="gebruikersScreen__users__header">
              <h4>Name</h4>
              <h4>Laatst gezien</h4>
            </div>
            <ul>
              {props.items.map((user) => (
                <GebruikerItem
                  key={user.id}
                  id={user.id}
                  image={user.image}
                  name={user.name}
                  lastSeen={user.lastSeen}
                  workoutCount={user.workouts}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GebruikersLijst;
