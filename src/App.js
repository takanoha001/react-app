import React, { Component } from "react";
import AppClass from "./AppClass.js";
// class

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <p>I am at App class </p>
        <AppClass name="Hornet" />
      </div>
    );
  }
}
