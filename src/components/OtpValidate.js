import React from "react";
import { get } from "axios";

// import history from "./../history";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useParams,
// } from "react-router-dom";

export default class ValiationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      otp: "",
      Errormessage: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      otp: event.target.value,
      // Errormessage: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    get(`http://localhost:4000/verfityotp?otp=${this.state.otp}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ otp: "1234" }),
    })
      .then((res) => {
        // console.log(res.data);
        if (res.status === 200) {
          this.props.history.push("/CallChatQL");
          // this.setState({
          //   data: res.data,
          // });
        }
      })
      .catch((err) => {
        console.log(err);

        if (err.response) {
          if (err.response.status !== 200) {
            this.setState({
              Errormessage: err.response.data.message,
            });
          }
          return;
        }
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>OtpValidate</h3>

        <div className="form-group">
          <label>Enter Your OTP</label>
          <input
            type="text"
            name="otp"
            value={this.state.otp}
            onChange={this.handleChange}
            className="form-control"
          />

          <div style={{ fontSize: 15, color: "red" }}>
            {this.state.Errormessage}
          </div>
        </div>

        <button
          variant="btn btn-success"
          className="btn btn-primary btn-block"
          type="submit"
        >
          Verify
        </button>
      </form>
    );
  }
}
