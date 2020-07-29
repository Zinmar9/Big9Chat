import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import signup from "./components/signup";
import OtpValidate from "./components/OtpValidate";

function App() {
  return (
    <Router>
      <div class="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              positronX.io
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/Login"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/signup"}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/OtpValidate"}>
                    OtpValidate
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <switch>
              <Route exact path="/" component={Login} />
              <Route path="/Login" component={Login} />
              <Route path="/signup" component={signup} />
              <Route path="/OtpValidate" component={OtpValidate} />
            </switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
