import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Details, Home } from ".";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} title="Home" />
          <Route path="/details/:id" component={Details} title="Details" />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
