import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }

  render() {
    return (
      <header>
        <div className="logo">Logo</div>

        <nav>
          <a href="#" className="words">Create Ads</a>
          <a href="#" className="words">About Us</a>
          <a href="#" className="words">Log in</a>
          <a href="#" className="register-btn">
            Register
          </a>
        </nav>
      </header>
    );
  }
}
