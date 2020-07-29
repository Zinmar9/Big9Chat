import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";

import history from "./../history";

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Enter Your Phno</label>
          <input
            type="phno"
            className="form-control"
            placeholder="Enter Phno"
          />
        </div>

        <button
          variant="btn btn-success"
          onClick={() => history.push("/OtpValidate")}
          type="submit"
          className="btn btn-primary btn-block"
        >
          SendOPT
        </button>
      </form>
    );
  }
}
