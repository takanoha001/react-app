import React, { Component } from "react";
import TemperatureInput from "./TempeartureInput";

export default class Calculator extends React.Component {
  render() {
    return (
      <div>
        <h2>Calculator.js</h2>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}
