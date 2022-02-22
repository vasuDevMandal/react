import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// class ThemeToggle extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { toggleThemeFunc, isLightTheme } = this.context;
//     return (
//       <button onClick={toggleThemeFunc}>
//         {isLightTheme ? "dark" : "light"}
//       </button>
//     );
//   }
// }

const ThemeToggle = () => {
  const { toggleThemeFunc, isLightTheme } = useContext(ThemeContext); //context is an object not string
  return (
    <button onClick={toggleThemeFunc}>{isLightTheme ? "dark" : "light"}</button>
  );
};

export default ThemeToggle;
