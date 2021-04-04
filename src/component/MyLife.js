import React, { Component } from "react";

export default class MyLife extends Component {
  constructor(props) {
    console.log("constructor() called");

    super(props);

    this.state = {
      current: new Date(),
    };
  }

  componentDidMount() {
    console.log("componentDidMount called");
    this.timer = setInterval(() => {
      console.log("setState called");
      this.setState({
        current: new Date(),
      });
    }, 5000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
    clearInterval(this.timer);
  }

  render() {
    console.log("render() called");
    return (
      <div>
        <h2>MyLife.js</h2>
        it is... {this.state.current.toLocaleString()}
      </div>
    );
  }
}
