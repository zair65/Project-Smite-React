import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js";

export default () =>   (
<Router>
 <Switch>
    <Route path="./Home.js" exact component={Home}></Route>
  </Switch>;
  </Router>


)