import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/login";
import Chatlist from "./components/Chatlist";
import OtpValidate from "./components/OtpValidate";

function App() {
  return (
    <Router>
      <div className="App">
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
                  <Link className="nav-link" to={"/Chatlist"}>
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
            <Switch>
              <Route exact path="/Big9Chat/" component={Login} />
              <Route path="/Big9Chat/Login" component={Login} />
              <Route path="/Big9Chat/Chatlist" component={Chatlist} />
              <Route path="/Big9Chat/OtpValidate" component={OtpValidate} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
