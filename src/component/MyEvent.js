import React, { Component } from "react";

export default class MyEvent extends Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
  }

  show(e) {
    const t = e.type;
    console.log("show...");
    console.log(t); //click
    setTimeout(() => {
      console.log(t);
    }, 4000);

    console.log(`${this.props.greet}, ${e.target.value}!! `);
  }

  render() {
    return (
      <form>
        <h2>MyEvent.js</h2>
        <p>MyEvent... </p>
        <label htmlFor="txtName">Name: </label>
        <input id="txtName" type="text" onChange={this.show} />
        <button type="button" onClick={this.show.bind(this)}>
          event info{" "}
        </button>
      </form>
    );
  }
}
