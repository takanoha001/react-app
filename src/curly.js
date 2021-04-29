import React from "react";
import global from "./global";

export default function Curly() {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ float: "left" }}>
        <div>Curly: {global.counter.count}</div>
        <div>
          <button onClick={global.counter.decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}
