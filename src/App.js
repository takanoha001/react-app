import React, { Component } from "react";
import AppClass from "./AppClass.js";
import PropTypes from "prop-types";

// class

export default class App extends Component {
  render() {
    const person = {
      name: "daisuke",
      age: 0,
      sex: "male",
    };

    return (
      <div className="App">
        <p>I am at App class </p>
        <AppClass {...person} />
        <AppClass />
      </div>
    );
  }
}
