import React, { Component } from "react";
import PropTypes from "prop-types";
import MyEvent from "./MyEvent";
import MyState from "./MyState";
import MyForm from "./MyForm";

// class
export default class App2 extends Component {
  render() {
    return (
      <div className="App2">
        <p>I am at App2 class </p>
        <MyEvent greet="halo" />
        <MyState />

        <MyForm />
      </div>
    );
  }
}
