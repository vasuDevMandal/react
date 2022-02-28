import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Clock from "./Clock";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Welcome name="vara" />
    <Clock />
  </React.StrictMode>,
  document.getElementById("root")
);

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// const element = <Welcome name="Sara" />;
// ReactDOM.render(element, document.getElementById("root"));
