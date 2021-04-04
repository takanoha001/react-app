import React, { Component } from "react";

import img from "../images/stateDiagram.jpg";

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
    //here process and it it fails then go to idle state
    switch (to) {
      case States.CONNECTED:
        alert("to be connected");

        alert("but it fails... setting to idle");

        to = States.IDLE;

        break;
      default:
        // alert("default");
        break;
    }

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
    return (
      <div>
        <h2>TestStateMachine.js</h2>
        <img src={img} alt="PCMA. logo" />
      </div>
    );
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
        <button onClick={() => this.transition(States.INIT)}>
          Go back to init
        </button>
      </div>
    );
  }
}

export default TestStateMachine;
