import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogboekScreen from "./screens/LogboekScreen/LogboekScreen";
import Gebruikers from "./Gebruiker/pages/Gebruikers";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClipboard, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faClipboard, faUser, faSignOutAlt);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LogboekScreen />
        </Route>
        <Route path="/gebruikers">
          <Gebruikers />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
