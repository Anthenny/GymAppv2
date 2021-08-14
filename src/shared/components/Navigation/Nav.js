import React, { useContext } from "react";

import { AuthContext } from "../../context/auth-context";
import "./Nav.css";

const Nav = () => {
  const auth = useContext(AuthContext);

  return (
    <nav className="nav">
      <h2>Welkom {!auth.gebruiker ? "" : `${auth.gebruiker.naam}`}</h2>
      {auth.gebruiker && (
        <div className="nav__user__info">
          <img src={`${process.env.REACT_APP_ASSET_URL}/${auth.gebruiker.image}`} alt="" />
          <h4>{auth.gebruiker.naam}</h4>
        </div>
      )}
    </nav>
  );
};

export default Nav;
