import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App1 from "./App1";
import App2 from "./App2";

//import AppFunctional from "./AppFunctional";
import AppClass from "./AppClass";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root1")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <AppClass name="test" sex="male" age="24" />
//     <AppClass name="test1" sex="female" age="33" />
//   </React.StrictMode>,
//   document.getElementById("root1")
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <App2 />
//     <AppClass />
//   </React.StrictMode>,
//   document.getElementById("root1")
// );

/**
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root1")
);

ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  document.getElementById("root1")
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
