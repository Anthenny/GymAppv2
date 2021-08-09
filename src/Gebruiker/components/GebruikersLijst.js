import React, { Fragment } from "react";

import GebruikerItem from "./GebruikerItem";

import "./Gebruikers.css";

const GebruikersLijst = (props) => {
  // Met redux toolkit globale user state vast leggen en user && gebruiken ipv lange if statements met code duplication
  if (props.items.length === 0) {
    return (
      <Fragment>
        <div className="gebruikerScreen">
          <div className="gebruikerScreen__container">
            <h2>Alle Gebruikers</h2>
            <h6>
              Hier kun je alle gebruikers zien die de app gebruiken. Als je hier ook tussen wilt
              staan moet je dit toestaan in jouw persoonlijke settings.
            </h6>
            <div className="gebruikersScreen__users">
              <div className="gebruikersScreen__users__header">
                <h4>Naam</h4>
                <h4>Laatst gezien</h4>
              </div>
              <ul>
                <li>Geen gebruikers gevonden</li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <div className="gebruikerScreen">
        <div className="gebruikerScreen__container">
          <h2>Alle Gebruikers</h2>
          <h6>
            Hier kun je alle gebruikers zien die de app gebruiken. Als je hier ook tussen wilt staan
            moet je dit toestaan in jouw persoonlijke settings.
          </h6>
          <div className="gebruikersScreen__users">
            <div className="gebruikersScreen__users__header">
              <h4>Naam</h4>
              <h4>Laatst gezien</h4>
            </div>
            <ul>
              {props.items.map((gebruiker) => (
                <GebruikerItem
                  key={gebruiker._id}
                  id={gebruiker._id}
                  image={gebruiker.image}
                  naam={gebruiker.naam}
                  laatstGezien={gebruiker.laatstGezien}
                  aantalWorkouts={gebruiker.aantalWorkouts}
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
