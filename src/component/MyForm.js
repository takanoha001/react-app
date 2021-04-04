import React, { Component } from "react";

export default class MyForm extends Component {
  constructor(props) {
    super(props);

    //1 default state
    this.state = {
      name: "lala",
      email: "lala@gmail.com",
    };

    //fix this
    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
  }

  //3 apply the change from inputbox to state
  handleChange(e) {
    console.log(e.target.value); //e.target.value is what is inserted in the box

    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  //4 send button output log
  show() {
    console.log(`name: ${this.state.name}`);
    console.log(`email: ${this.state.email}`);

    let abc = `name: ${this.state.name}` + ` email: ${this.state.email}`;
    alert(abc);
  }

  render() {
    return (
      <form>
        <h2>MyForm.js</h2>
        {/*2. state apply */}
        <div>
          <label htmlFor="name">name: </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>

        <div>
          <label htmlFor="email">email: </label>
          <input
            id="email"
            name="email"
            type="mail"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </div>

        <div>
          <button type="button" onClick={this.show}>
            send
          </button>
        </div>
      </form>
    );
  }
}
