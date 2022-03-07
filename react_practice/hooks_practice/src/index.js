import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Clock from "./component/Clock";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Welcome name="vara" /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(element, document.getElementById("root"));
// const [timer, setTimer] = useState("");

// const tick = () => {
//   ReactDOM.render(
//     <div>
//       <Clock></Clock>
//     </div>,
//     document.getElementById("clockBox")
//   );
// };

// setInterval(tick, 1000);
