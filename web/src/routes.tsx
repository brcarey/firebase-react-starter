import * as React from "react";
import { Redirect, Route, Switch } from "react-router";
import Dashboard from "./pages/Dashboard";

export const Routes = {
  dashboard: {
    location: "/dashboard"
  }
};

export default () => (
  <Switch>
    <Route exact path={Routes.dashboard.location} component={Dashboard} />
    <Redirect to={Routes.dashboard.location} />
  </Switch>
);
