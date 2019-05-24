import React, { Component } from "react";

export class contact extends Component {
  render() {
    return (
      <React.Fragment className="container">
        <h1>Contact Us</h1>
        <form action="" className="styleForm">
          <input type="text" name="name" placeholder="name" />
          <input type="email" name="email" placeholder="email" />
          <textarea placeholder="message" />
          <button className="btn">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default contact;
