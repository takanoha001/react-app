import React, { Component } from "react";
import PropTypes from "prop-types";
import MyEvent from "./component/MyEvent";
import MyState from "./component/MyState";
import MyForm from "./component/MyForm";
import MyTextarea from "./component/MyTextarea";
import MyTextareaOut from "./component/MyTextareaOut";
import MyList from "./component/MyList";
import MyRadio from "./component/MyRadio";
import MyLife from "./component/MyLife";
import Calculator from "./component/Calculator";
import TemperatureInput from "./component/TempeartureInput";
import AppClass from "./component/AppClass.js";
import ClassComponent from "./component/ClassComponent.js";
import StateHook from "./component/StateHook.js";
import FunctionalComponent from "./component/FunctionalComponent.js";
import TestStateMachine from "./component/TestStateMachine";
import TestSystem from "./component/TestSystem";

// class
export default class App2 extends Component {
  render() {
    return (
      <div className="App2">
        <p>I am at App2 class </p>

        <Calculator />
        <MyTextarea />
        <MyTextareaOut />
        <MyLife />
        <MyRadio />
        <MyList />
        <MyEvent greet="halo" />
        <MyState />
        <MyForm />
        <TestStateMachine />
        <StateHook />
        <ClassComponent countA={2} countB={20} propsOnlyValue={1000}>
          {"class compo "}{" "}
        </ClassComponent>
        <FunctionalComponent countA={5} countB={20} propsOnlyValue={1000}>
          {"functinoal compo "}
        </FunctionalComponent>
      </div>
    );
  }
}
