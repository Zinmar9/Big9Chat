import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import OtpValidate from "./components/OtpValidate";
import Login from "./components/Login";
import signup from "./components/signup";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Otp" component={OtpValidate} />
          <Route path="/signup" component={signup} />
          <Route path="/Login" component={Login} />
        </Switch>
      </Router>
    );
  }
}
