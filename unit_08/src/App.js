import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [state, setState] = useState([]);
  const myref = React.createRef();

  const h1 = React.createElement("h1", {}, "unit_08");
  const h2 = React.createElement(
    "h2",
    { className: "text-orange" },
    "header 2"
  );
  const p = React.createElement("p", { style: { color: "red" } }, "this is p");
  const input = React.createElement("input", { defaultValue: "55" });
  const p1 = React.createElement("p", {}, "hi");
  const p2 = React.createElement("p", {}, "world");
  const div = React.createElement("div", { className: "text-grey" }, p1, p2);
  // const input1 = React.createElement("input", { ref: "myref" });
  // const button = React.createElement(
  //   "button",
  //   { onClick: validation() },
  //   "Button"
  // );
  function validation() {
    let ar = [...state];
    let inp = myref.current.value;
    if (inp.length > 0) {
      ar.push(inp);
    }
    setState(ar);
  }
  return (
    <>
      {h1}
      {h2}
      {p}
      {input}
      {div}
      {/* {input1} */}
      {/* {button} */}
      <input ref={myref}></input>
      <button onClick={validation}>Button</button>
      <ul>
        {state.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
