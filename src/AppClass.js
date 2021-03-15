import React, { Component } from "react";
import "./App.css";

// class

export default class AppClass extends Component {
  render() {
    return (
      <div className="AppClass">
        <p> Hello [{this.props.name}] printing from AppClass.js </p>
      </div>
    );
  }
}
