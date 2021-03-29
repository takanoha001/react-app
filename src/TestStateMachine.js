import React, { Component } from "react";

import img from "./stateDiagram.jpg";

const States = {
  INIT: 0,
  IDLE: 1,
  CONNECTED: 2,
  FIN: 3,
};

class TestStateMachine extends Component {
  state = {
    current: States.INIT,
  };
  transition(to) {
    this.setState({ current: to });
  }
  render() {
    switch (this.state.current) {
      case States.IDLE:
        return this.renderIdle();
      case States.CONNECTED:
        return this.renderConnected();
      case States.FIN:
        return this.renderFinish();
      case States.INIT:
      default:
        return this.renderInit();
    }
  }

  renderDiagram() {
    return <img src={img} alt="PCMA. logo" />;
  }

  renderInit() {
    return (
      <div>
        {this.renderDiagram()}

        <p>@INIT - initializing to start the app... </p>
        {/* here go to idle immediately... */}
        <button onClick={() => this.transition(States.IDLE)}>
          mimic going to the next stage upon click
        </button>
      </div>
    );
  }

  renderIdle() {
    return (
      <div>
        {this.renderDiagram()}
        <p>@IDLE </p>
        <button onClick={() => this.transition(States.FIN)}>
          exit the app{" "}
        </button>

        <button onClick={() => this.transition(States.CONNECTED)}>
          Connect
        </button>
      </div>
    );
  }

  renderConnected() {
    return (
      <div>
        {this.renderDiagram()}
        <p>@CONNECTED </p>
        <button onClick={() => this.transition(States.IDLE)}>Disconnect</button>
      </div>
    );
  }
  renderFinish() {
    return (
      <div>
        {this.renderDiagram()}
        <p>@FINISH - end of app</p>
        {/* <button onClick={() => this.transition(States.INIT)}>Click me</button> */}
      </div>
    );
  }
}

export default TestStateMachine;
