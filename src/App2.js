import React, { Component } from "react";
import PropTypes from "prop-types";
import MyEvent from "./MyEvent";
import MyState from "./MyState";
import MyForm from "./MyForm";
import MyTextarea from "./MyTextarea";
import MyList from "./MyList";
import MyRadio from "./MyRadio";

// class
export default class App2 extends Component {
  render() {
    return (
      <div className="App2">
        <p>I am at App2 class </p>

        <MyRadio />
        <MyList />
        <MyTextarea />
        <MyEvent greet="halo" />
        <MyState />

        <MyForm />
      </div>
    );
  }
}
