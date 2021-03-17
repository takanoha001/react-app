import React, { Component } from "react";

export default class MyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fruit: ["apple", "melon"],
    };
    this.handleChangeList = this.handleChangeList.bind(this);
    this.show = this.show.bind(this);
  }
  handleChangeList(e) {
    const data = [];
    const opts = e.target.options;
    for (let i = 0; i < opts.length; i++) {
      if (opts[i].selected) {
        data.push(opts[i].value);
      }
    }
    this.setState({
      [e.target.name]: data,
    });
  }

  show() {
    console.log(`fruite : ${this.state.fruit}`);
  }

  render() {
    return (
      <form>
        <label htmlFor="fruit">fruit: </label>
        <br />
        <select
          id="fruit"
          name="fruit"
          value={this.state.fruit}
          size="5"
          multiple={true}
          onChange={this.handleChangeList}
        >
          <option value="apple1">apple1</option>
          <option value="apple2">apple2</option>
          <option value="apple3">apple3</option>
          <option value="apple4">apple4</option>
          <option value="apple5">apple5</option>
        </select>
        <button type="button" onClick={this.show}>
          send
        </button>
      </form>
    );
  }
}
