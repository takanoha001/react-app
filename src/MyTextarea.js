import React, { Component } from "react";

export default class MyTextarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memo: "React is interesting",
    };
    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
  }

  handleChange(e) {
    console.log(`${e.target.value}`);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  show() {
    console.log(`memo: ${this.state.memo}`);
  }

  render() {
    return (
      <form>
        <label htmlFor="memo">memo: </label>
        <br />
        <textarea
          id="memo"
          name="memo"
          cols="30"
          rows="7"
          value={this.state.memo}
          onChange={this.handleChange}
        ></textarea>
        <br />
        <button type="button" onClick={this.show}>
          send
        </button>
      </form>
    );
  }
}
