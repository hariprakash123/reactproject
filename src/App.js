import React from "react";
import "./styles.css";
import index from "./pages/landing-page/landing";
import pricing from "./pages/pricing-page/pricingpage";
import sampledemo from "./pages/sample-test/sampledemo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={index} />
          <Route exact path="/pricing" component={pricing} />
          <Route exact path="/sampledemo" component={sampledemo} />
        </Switch>
      </Router>
    </div>
  );
}
