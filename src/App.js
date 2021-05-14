import React, { Component } from "react";

import App2 from "./App2";
import App1 from "./App1";
import App3 from "./App3";
import App4 from "./App4";

// class

export default class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <App1 />
      //   <App2 />
      // </div>
      <div className="App">
        <App4 />
      </div>
    );
  }
}
