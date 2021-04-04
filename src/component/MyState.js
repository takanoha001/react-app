import React, { Component } from "react";

export default class MyState extends Component {
  constructor(props) {
    super(props);

    //1 default state value
    this.state = {
      current: new Date(),
    };
    //3 every 1 sec update State
    setInterval(() => {
      this.setState({
        current: new Date(),
      });
    }, 1000);
  }

  render() {
    return <div> clock: {this.state.current.toLocaleString()}</div>;
  }
}
