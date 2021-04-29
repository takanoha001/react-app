import React from "react";
import global from "./global";

export default function Larry() {
  return (
    <div style={{ marginBottom: 20 }}>
      <div>Larry: {global.counter.count}</div>
      <div>Larry: {global.counter.text}</div>

      <div>
        <button onClick={global.counter.increment}>Increment</button>
      </div>

      <div>
        <p>Your message: {global.counter.message}</p>
        <input
          type="text"
          onChange={(e) => global.counter.setMessage(e.target.value)}
        />
      </div>
    </div>
  );
}
