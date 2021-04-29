import React from "react";
import { render } from "react-dom";
import Larry from "./larry";
import Curly from "./curly";
import useCounter from "./use.counter";
import global from "./global";

const App3 = () => {
  global.counter = useCounter();

  return (
    <>
      <Larry />
      <Curly />

      <div style={{ marginTop: 50 }}>
        Larry, Curly, Moe, and Curly Jr. all display the <i>same</i>, shared,
        global variable - "count". When it gets updated, the display is
        refreshed <i>everywhere</i>.
        <br />
        <br />
        Each person can update the global "count" value because their buttons
        are leveraging the functions that were exposed on the useCounter()
        custom Hook. However, notice that when you click on Curly's button,
        nothing happens. That's because Curly got lazy and tried to update
        global.counter.count <i>directly</i>. This doesn't work - which is a
        huge <i>benefit</i> of this approach. This ensures that shared variables
        can only be updated in a single place.
        <br />
        <br />
        This approach works because Larry, Curly, Moe, and Curly Jr. are not
        using their own individual calls to useCounter(). Instead, there is only{" "}
        <i>one</i> call to useCounter() - in the index.js file. Once the custom
        Hook is loaded, it's saved into a simple JavaScript object (global.js).
        <br />
        <br />
        Once that custom Hook is loaded into the global object, all other
        components merely need to import "global" in order to have access to
        useCounter()'s state variables and update methods.
      </div>
    </>
  );
};

export default App3;
