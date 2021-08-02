import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <h2>Welkom gebruiker </h2>
      <div className="nav__user__info">
        <img src="./images/Ellipse 6.png" alt="" />
        <h4>Anthenny</h4>
      </div>
    </nav>
  );
};

export default Nav;
