import React, { Component } from "react";
import AppClass from "./AppClass.js";
import PropTypes from "prop-types";
import ClassComponent from "./ClassComponent.js";
import StateHook from "./StateHook.js";

import FunctionalComponent from "./FunctionalComponent.js";

import TestStateMachine from "./TestStateMachine";

// class

export default class App extends Component {
  render() {
    const person = {
      name: "daisuke",
      age: 0,
      sex: "male",
    };
    return (
      <div className="App">
        <TestStateMachine />
      </div>
    );
    // return (
    //   <div className="App">
    //     <StateHook />
    //     <ClassComponent countA={2} countB={20} propsOnlyValue={1000}>
    //       {"class compo "}{" "}
    //     </ClassComponent>
    //     <FunctionalComponent countA={5} countB={20} propsOnlyValue={1000}>
    //       {"functinoal compo "}
    //     </FunctionalComponent>
    //   </div>
    // );
  }
}
