import React, { useState, useEffect } from "react";

const MyIntervalRevisedOld = () => {
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);

  //option 1. passing an empty array [] means componentDidMount()
  // so setinterval gets called only once when initializing.
  //option 2. not passing means componentDidMount() and componentDidUpdate()
  // so set interval gets called every time click is pressed so
  useEffect(() => {
    console.log("useEffect -a");

    const j = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
      console.log("seconds: " + seconds);
      if (seconds === 3) {
        clearInterval(j);
      }
    }, 1000);

    console.log("useEffect -x");
  }, []);

  return (
    <div>
      <p>
        {seconds}
        <button onClick={() => setSeconds(0)}>Reset</button>
      </p>
      <p></p>
      <p>
        Clicked {count} times
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </p>
    </div>
  );
};

export default MyIntervalRevisedOld;

// useEffect - a
// useEffect - x
// seconds: 0
// seconds: 1
