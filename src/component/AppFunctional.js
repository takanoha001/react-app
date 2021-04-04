import logo from "./logo.svg";
import "../App.css";

//do not use functional component because it cannot use State or Lifecycle

//functional component
//props --> X --> React
//receives props and return React

function AppFunctional() {
  return (
    <div className="AppFunctional">
      <h2>AppFunctional.js</h2>
      <p>printing from AppFunctiona.js</p>
    </div>
  );
}

export default AppFunctional;
