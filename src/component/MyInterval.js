import React, { Component } from "react";

let count = 0;

function lala() {
  let first = setInterval(() => {
    count++;
    console.log("count=" + count);
    if (count === 10) {
      clearInterval(first);
    }
  }, 10000);
}

export default class MyInterval extends Component {
  constructor(props) {
    super(props);

    //1 default state value
    this.state = {
      current: new Date(),
    };
    //3 every 1 sec update State
    setInterval(() => {
      console.log("setInterval");
      this.setState({
        current: new Date(),
      });
    }, 10000);
  }

  render() {
    console.log("render()");
    lala();

    return (
      <div>
        <h2>MyInterval.js</h2>
        clock: {this.state.current.toLocaleString()}
      </div>
    );
  }
}
