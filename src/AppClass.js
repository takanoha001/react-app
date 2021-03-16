import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

// class

export default class AppClass extends Component {
  render() {
    return (
      <div className="AppClass">
        <p> Hello [{this.props.name}] printing from AppClass.js </p>

        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.age}</li>
          <li>{this.props.sex}</li>
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
  name: "unknown",
  age: 0,
  sex: "unknown",
};
