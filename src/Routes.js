import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import OtpValidate from "./components/OtpValidate";
import Login from "./components/Login";
import Chatlist from "./components/Chatlist";
import history from "./history";
import Redirect from "https://awsmobileappsyncchat-20190701060249-hostingbucket-chatapp.s3.ap-southeast-1.amazonaws.com/index.html";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Big9Chat/OtpValidate" component={OtpValidate} />
          <Route path="/Big9Chat/Chatlist" component={Chatlist} />
          <Route path="/Big9Chat/Login" component={Login} />
          <Route path="/Big9Chat/CallChatQL" component={Redirect} />
        </Switch>
      </Router>
    );
  }
}
