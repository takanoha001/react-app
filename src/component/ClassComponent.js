import React, { Component } from "react";
import "../App.css";
import PropTypes from "prop-types";

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countA: this.props.countA || 1,
      countB: this.props.countB || 10,
    };
  }

  onClickA() {
    this.setState((state) => ({ ...state, countA: state.countA + 1 }));
  }

  onClickB() {
    this.setState((state) => ({ ...state, countB: state.countB + 10 }));
  }

  render() {
    return (
      <div>
        <h2>ClassComponent.js</h2>
        <div>
          countA: {this.state.countA}
          <button onClick={this.onClickA.bind(this)}>Click!</button>
        </div>

        <div>
          countB: {this.state.countB}
          <button onClick={this.onClickB.bind(this)}>Click!</button>
        </div>
        <div>propsOnlyValue: {this.props.propsOnlyValue}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

// // RenderPropsを使ったコンポーネント
// // @see https://ja.reactjs.org/docs/render-props.html
// class WithRenderPropsComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: ""
//     };
//   }
//   componentDidMount() {
//     const min = 30;
//     const max = 100;
//     const lineLength = Math.floor(Math.random() * (max + 1 - min)) + min;
//     this.setState({
//       text: `長さ ${lineLength} cmの正方形の面積は ${lineLength *
//         2} 平方ｃｍです`
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h2>This is a RenderPropsComponent</h2>
//         {this.props.render(this.state.text)}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <WithRenderPropsComponent
//     render={(text) => (
//       <ClassComponent countA={2} countB={20} propsOnlyValue={1000}>
//         {text}
//       </ClassComponent>
//     )}
//   />,
//   document.getElementById("app")
// );
