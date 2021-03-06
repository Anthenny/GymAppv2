import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AuthContext } from "../../context/auth-context";

import "./SideBar.css";

const SideBar = () => {
  // Je krijgt een object terug die re-renderd als de context veranderd
  const auth = useContext(AuthContext);
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
            {auth.isLoggedIn && (
              <li>
                <NavLink to="/" exact activeClassName="active">
                  <FontAwesomeIcon className="sidebar__icon" icon="clipboard" />
                  Logboek
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to="/gebruikers" activeClassName="active">
                <FontAwesomeIcon className="sidebar__icon" icon="user" />
                Gebruikers
              </NavLink>
            </li>
            {!auth.isLoggedIn && (
              <li>
                <NavLink to="/login" activeClassName="active">
                  <FontAwesomeIcon className="sidebar__icon" icon="sign-in-alt" />
                  Log in
                </NavLink>
              </li>
            )}
            {!auth.isLoggedIn && (
              <li>
                <NavLink to="/signup" activeClassName="active">
                  <FontAwesomeIcon className="sidebar__icon" icon="user-plus" />
                  Sign up
                </NavLink>
              </li>
            )}
            {auth.isLoggedIn && (
              <li>
                <Link onClick={auth.logout} to="#">
                  <FontAwesomeIcon className="sidebar__icon" icon="sign-out-alt" />
                  Log out
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
