import React, { Component } from "react";
import MyArticle from "./MyArticle.js";
import PropTypes from "prop-types";

// class
export default class App1 extends Component {
  render() {
    const books = [
      {
        url: "google.com",
        title: "book1 ",
        description: "abcd",
        isNew: true,
      },
      {
        url: "google.com",
        title: "book2",
        description: "dsa",
        isNew: true,
      },
      {
        url: "google.com",
        title: "book3",
        description: "xyz",
        isNew: true,
      },
    ];

    return (
      <div className="App1">
        <p>I am at App1 class </p>
        <dl>
          {books.map((book) => (
            <MyArticle {...book} />
          ))}
        </dl>
      </div>
    );
  }
}
