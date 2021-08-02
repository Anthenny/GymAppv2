import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__brand">
          <h1>Guardian</h1>
          <p className="time">09:54</p>
          <p className="date">11-5-2021</p>
        </div>

        <div className="sidebar__menu">
          <ul>
            <li>
              <a className="active" href="#">
                <FontAwesomeIcon className="sidebar__icon" icon="clipboard" />
                Logboek
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon className="sidebar__icon" icon="user" />
                Gebruikers
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon className="sidebar__icon" icon="sign-out-alt" />
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
