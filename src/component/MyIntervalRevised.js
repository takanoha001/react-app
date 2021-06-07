import React, { useState, useEffect } from "react";

/**
 * An example to use asynchronous interval.
 *
 * There are states: init, idle, connect and connected.
 *
 * 0. when it is initialized the state goes from init to idle.
 * 1. during idle user presses "connect button" and tries to connect
 * 2. currentState gets updated to connect then useEffect() is called
 * 3. in useEffect()
 *      a. prints update() -a
 *      b. call IsThisRunning() via asyncInterval(). it will exit if the function returns true or tries X times
 *      c. once b. is done it sets to either idle (failed basically) or connected (successfull)
 *      d. print update() -x
 *
 */
const MyIntervalRevised = () => {
  const [currentState, sendEvent] = useState("init");
  const [count, setCount] = useState(0);

  function sleep(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }

  /**
   * Async interval. It waits until the callback returns or # of tries maxes out
   *
   * @param {callback function to call inside this} callback
   * @param {interval time} ms
   * @param {# of tries} triesLeft
   * @returns the value of the callback function
   */
  const asyncInterval = async (callback, ms = 1000, triesLeft = 10) => {
    return new Promise((resolve, reject) => {
      const interval = setInterval(async () => {
        const res = await callback();
        // if the return value of callback() is true
        //or tried 10 times then get out
        if (res || triesLeft <= 1) {
          resolve(res); //returning the return value of callback()
          clearInterval(interval);
        }
        triesLeft--;
      }, ms);
    });
  };

  /**
   * mocking to check the server status
   *
   * @returns the value of the function
   */
  const IsThisRunning = async () => {
    const a = Math.random() > 0.8;
    console.log("isThisRunning ?...: " + a);
    return a;
  };

  /**
   * useEffect() is called whenever state gets updated.
   *
   * for react class:
   * componentDidMount() is called when initializing
   * componentDidUpdate() is called when class vairables get updated
   */
  useEffect(() => {
    async function update() {
      const random = Math.random();

      console.log("update() -a " + random);
      console.log("currentState: " + currentState);
      try {
        if (currentState === "init") {
          console.log("--------- init");
          sendEvent("idle");
        } else if (currentState === "idle") {
          console.log("--------- idle");
        } else if (currentState === "connect") {
          console.log("--------- connect");

          //check to see if IsThisRunning ?
          if (!(await asyncInterval(IsThisRunning, 500, 5))) {
            console.log("not running");
            sendEvent("idle");
          } else {
            console.log("running !");
            sendEvent("connected");
          }
        }
      } catch (error) {
        console.log("error: " + error);
      }
      console.log("update() -x " + random);
    }
    update();
  }, [currentState, sendEvent]);

  return (
    <div>
      <p>{currentState}</p>
      <p>
        <button onClick={() => sendEvent("idle")}>Set Idle</button>
        <button onClick={() => sendEvent("connect")}>connect</button>
      </p>
    </div>
  );
};

export default MyIntervalRevised;
