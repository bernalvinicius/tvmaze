import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from ".";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" exact component={Home} title="Home" />
          {/* <Route path="/movie/:id" component={Article} title="Article" /> */}
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
