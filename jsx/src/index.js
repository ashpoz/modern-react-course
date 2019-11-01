// 1. Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// 2. Create a React component
const App = () => {
    const buttonText = {text: 'click me'};
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{ buttonText.text }</button>
    </div>
  );
};

// 3. Take the React Component and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
