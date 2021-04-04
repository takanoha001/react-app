import React, { Component } from "react";

import os from "os";

function getCPU() {
  console.log("-------- " + os.cpus());
}

export default class TestSystem extends Component {
  render() {
    return (
      <div className="TestSystem">
        <h2>TestSystem.js</h2>
        <p>lalalla</p>
        <p>'{getCPU()}'</p>
      </div>
    );
  }
}
