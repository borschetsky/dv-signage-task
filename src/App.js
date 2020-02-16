import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "./pages/feed";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="flex-container">
            <Feed type={"dark"} />
          </div>
        </Route>
        <Route path="/light">
          <div className="flex-container">
            <Feed type={"light"} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
