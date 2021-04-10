import React, { Component } from "react";

const members = ["Araki", "Ibata", "Fukutome", "Woods", "Alex", "Tatsunami"];

export default class MyRadio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sex: "male",
      lastName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
  }

  handleChange(e) {
    console.log("handleChange() e:" + e.target.value);

    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  show() {
    //console.log(`show(): ${this.state.sex}`);
  }

  render() {
    console.log("render: " + this.state.lastName);

    return (
      <form>
        <div>
          <h2>MyRadio.js</h2>
          {/* 
          <label htmlFor="sex_male">male</label>
          <input
            id="sex_male"
            name="sex"
            type="radio"
            value="male"
            checked={this.state.sex === "male"}
            onChange={this.handleChange}
          />
          <label htmlFor="sex_female">female</label>
          <input
            id="sex_female"
            name="sex"
            type="radio"
            value="female"
            checked={this.state.sex === "female"}
            onChange={this.handleChange}
          />
          <br /> */}

          {/* {this.state.current_alternative.map((item) => (
            <input key={item.id} type="radio">
              <label>{item.content}</label>
            </input>
          ))} */}

          {members.map((item) => (
            <React.Fragment>
              <label htmlFor={item}> {item}</label>
              <input
                name="lastName"
                key={item}
                id={item}
                value={item}
                type="radio"
                onChange={this.handleChange}
              />
            </React.Fragment>
          ))}
        </div>
        <div></div>
      </form>

      // <form>
      //   <h2>MyRadio.js</h2>
      //   <fieldset>
      //     <input
      //       type="radio"
      //       name="selectedRadio"
      //       th:value="${item.key}"
      //       th:text="${item.value}"
      //       th:field="*{selectedRadio}"
      //     />
      //   </fieldset>
      //   <button type="button" onClick={this.show}>
      //     send
      //   </button>
      // </form>
    );
  }

  render2() {
    return (
      <form>
        <h2>MyRadio.js</h2>
        {/*<fieldset>
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
        </fieldset> */}
        <button type="button" onClick={this.show}>
          send
        </button>
      </form>
    );
  }
}
