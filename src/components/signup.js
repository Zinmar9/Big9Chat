import React, { Component } from "react";
import ImageUploader from "react-images-upload";

import history from "./../history";
export default class signup extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="name" />
        </div>

        {/* <div className="form-group">
          <label>Choose Image</label>

          <input
            ref="file"
            type="file"
            name="user[image]"
            multiple="true"
            onChange={this_onChange}
          />

        
          <img src={this.state.imgSrc} />
        </div> */}

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>
      </form>
    );
  }
}
