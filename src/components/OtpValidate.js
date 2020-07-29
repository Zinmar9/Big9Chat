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

export default class OtpValidate extends Component {
  render() {
    return (
      <form>
        <h3>OtpValidate</h3>

        <div className="form-group">
          <label>Enter Your OTP</label>
          <input type="otp" className="form-control" placeholder="Enter OTP" />
        </div>

        <button
          variant="btn btn-success"
          onClick={() => history.push("/signup")}
          type="submit"
          className="btn btn-primary btn-block"
        >
          Submit
        </button>
      </form>
    );
  }
}
