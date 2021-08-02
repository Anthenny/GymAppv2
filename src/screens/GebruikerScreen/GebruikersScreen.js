import React, { Fragment } from "react";
import SideBar from "../../shared/components/SideBar";
import Nav from "../../shared/components/Nav";
import "./GebruikersScreen.css";

const GebruikersScreen = () => {
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
              <li>
                <div className="user__info">
                  <img src="./images/profilepic.png" alt="" />
                  <p>Rock Johnson</p>
                </div>
                <div className="user__seen">
                  <p>30-7-2021</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GebruikersScreen;
