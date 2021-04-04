import React, { Component } from "react";
import "../App.css";
import PropTypes from "prop-types";

// class

export default class AppClass extends Component {
  render() {
    return (
      <div className="AppClass">
        <h2>AppClass.js</h2>
        <p> Hello [{this.props.name}] printing from AppClass.js </p>

        <ul>
          <li>name: {this.props.name}</li>
          <li>age: {this.props.age}</li>
          <li>sex: {this.props.sex}</li>
        </ul>
      </div>
    );
  }
}

AppClass.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.oneOf(["male", "female", "unknown"]),
};

AppClass.defaultProps = {
  name: "default unknown",
  age: 0,
  sex: "default unknown",
};
