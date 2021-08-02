import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Gebruikers from "./Gebruiker/pages/Gebruikers";
import Logboek from "./Logboek/pages/Logboek";
import UserLogs from "./Logboek/pages/UserLogs";
import LogboekSpecifiek from "./Logboek/pages/LogboekSpecifiek";
import Nav from "./shared/components/Navigation/Nav";
import SideBar from "./shared/components/Navigation/SideBar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faClipboard, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faClipboard, faUser, faSignOutAlt);

function App() {
  return (
    <Router>
      <Nav />
      <SideBar />
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
        <Route path="/logboek/:logId">
          <LogboekSpecifiek />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
