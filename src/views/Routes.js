import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Details, Home, Infos } from ".";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} title="Home" />
          <Route path="/shows/:name/:id" component={Infos} title="Infos" />
          <Route path="/details" component={Details} title="Details" />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
