import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";

import Gebruikers from "./Gebruiker/pages/Gebruikers";
import Logboek from "./Logboek/pages/Logboek";
import UserLogs from "./Logboek/pages/UserLogs";
import LogboekSpecifiek from "./Logboek/pages/LogboekSpecifiek";
import Nav from "./shared/components/Navigation/Nav";
import SideBar from "./shared/components/Navigation/SideBar";
import UpdateLog from "./Logboek/pages/UpdateLog";
import AuthLogin from "./Gebruiker/pages/AuthLogin";
import AuthSignup from "./Gebruiker/pages/AuthSignup";
import { AuthContext } from "./shared/context/auth-context";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faClipboard,
  faUser,
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faClipboard, faUser, faSignOutAlt, faSignInAlt, faUserPlus);

function App() {
  const [token, setToken] = useState(false);
  const [gebruikerId, setGebruikerId] = useState(null);
  const [gebruiker, setGebruiker] = useState(undefined);

  const login = useCallback((gebruikerId, gebruiker, token, expirationDate) => {
    setToken(token);
    setGebruikerId(gebruikerId);
    setGebruiker(gebruiker);
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    localStorage.setItem(
      "gebruikerData",
      JSON.stringify({
        gebruikerId,
        gebruiker,
        token,
        expiration: tokenExpirationDate.toISOString(),
      })
    ); // convert json to string
  }, []);

  const logout = useCallback(() => {
    setToken(false);
    setGebruikerId(null);
    setGebruiker(undefined);
    localStorage.removeItem("gebruikerData");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("gebruikerData")); // convert string back to json
    if (storedData && storedData.token && new Date(storedData.expiration) > new Date()) {
      login(
        storedData.gebruikerId,
        storedData.gebruiker,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Logboek />
        </Route>
        <Route path="/gebruikers" exact>
          <Gebruikers />
        </Route>
        <Route path="/:userId/logs" exact>
          <UserLogs />
        </Route>
        <Route path="/logboek/:logId" exact>
          <LogboekSpecifiek />
        </Route>
        <Route path="/logboek/update/:logId" exact>
          <UpdateLog />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact>
          <AuthLogin />
        </Route>
        <Route path="/signup" exact>
          <AuthSignup />
        </Route>
        <Route path="/gebruikers" exact>
          <Gebruikers />
        </Route>
        <Route path="/:userId/logs" exact>
          <UserLogs />
        </Route>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    );
  }

  return (
    // Alles binnen in de provider is gesubscribed op auth-context als de value prop changed weten de components dat ook en worden ze gererenderd
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        gebruikerId: gebruikerId,
        gebruiker: gebruiker,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <Nav />
        <SideBar />
        {routes}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
