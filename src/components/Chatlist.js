import React, { Component } from "react";
// import ImageUploader from "react-images-upload";

export default class Chatlist extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <input
            type="text"
            name=""
            id=""
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
          {/* <small id="helpId" class="text-muted">
            Help text
          </small> */}
        </div>
        {/* <div className="form-group">
          <image src="./image/people_image.png" alt="image"></image> 
          <div className="title-text">Su u</div>
          <div className="date">27 Jun</div>
          <div className="conversation-message">Hello</div>

          <input type="text" className="form-control" placeholder="name" />
        </div> */}
      </div>
    );
  }
}
