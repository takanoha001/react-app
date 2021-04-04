import React, { Component } from "react";

export default class MyRadio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sex: "male",
    };
    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
  }

  handleChange(e) {
    console.log(`handleChange(): ${this.state.sex}`);

    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  show() {
    console.log(`show(): ${this.state.sex}`);
  }

  render() {
    return (
      <form>
        <h2>MyRadio.js</h2>
        <fieldset>
          <legend>sex</legend>

          <label htmlFor="sex_male">male</label>
          <input
            id="sex_male"
            name="sex"
            type="radio"
            value="male"
            checked={this.state.sex === "male"}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="sex_female">female</label>
          <input
            id="sex_female"
            name="sex"
            type="radio"
            value="female"
            checked={this.state.sex === "female"}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="sex_female">other</label>
          <input
            id="sex_other"
            name="sex"
            type="radio"
            value="other"
            checked={this.state.sex === "other"}
            onChange={this.handleChange}
          />
        </fieldset>
        <button type="button" onClick={this.show}>
          send
        </button>
      </form>
    );
  }
}
