import { BrowserRouter as Router, Route } from "react-router-dom";

import * as ROUTES from "./constants/routes";

import { Home } from "./pages/index";

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}

export default App;
