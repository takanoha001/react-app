import React, { Component } from "react";
import MyNew from "../component/MyNew";

export default class MyArticle extends Component {
  // add a gif if it is a new item
  renderIfNew(isNew) {
    if (isNew) {
      return <MyNew />;
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>MyArticle.js</h2>
        <dt>
          <a href={this.props.url}>{this.props.title}</a>
          {this.renderIfNew(this.props.isNew)}
        </dt>
        <dd>{this.props.description} </dd>
      </React.Fragment>
    );
  }
}
