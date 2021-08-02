import React from "react";
import { NavLink } from "react-router-dom";
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
              <NavLink to="/" exact activeClassName="active">
                <FontAwesomeIcon className="sidebar__icon" icon="clipboard" />
                Logboek
              </NavLink>
            </li>
            <li>
              <NavLink to="/gebruikers" activeClassName="active">
                <FontAwesomeIcon className="sidebar__icon" icon="user" />
                Gebruikers
              </NavLink>
            </li>
            <li>
              <NavLink to="/auth" activeClassName="active">
                <FontAwesomeIcon className="sidebar__icon" icon="sign-out-alt" />
                Log in
              </NavLink>
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
