//Don't change code unless discussed first with AyDy! Will disrupt navbar links! Thanks!
//trying out links with local host 3000. Will merge with backend. Expect changes.

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
const App = () => {
  return (
    /* ensures that path is exact and will redirect user from landing on unsupported pages */
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
export default App;
