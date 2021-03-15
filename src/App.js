import React, { Component } from "react";
import AppClass from "./AppClass.js";
// class

export default class App extends Component {
  render() {
    const person = {
      name: "daisuke",
      age: "00",
      sex: "male",
    };

    return (
      <div className="App">
        <p>I am at App class </p>
        <AppClass {...person} />
      </div>
    );
  }
}
