import React, { Component, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

// they both class and function both provide same functionality

// using class component---------------------------------------

class Navbar extends Component {
  // contextType is property for setting context in react
  static contextType = ThemeContext;

  render() {
    console.log(this.context);

    return (
      // different way of accessing the consumer is throurh context.consumer tags
      // it expects a function and we pass context as parameter to the function then use it

      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isAuthenticated, toggleAuthFunc } = authContext;
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>context app</h1>
                  <button onClick={toggleAuthFunc}>
                    {isAuthenticated ? "logged in" : "logged out"}
                  </button>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

// using functional component------------------------------------

// const Navbar = () => {
//   const { isLightTheme, light, dark } = useContext(ThemeContext);
//   const { isAuthenticated, toggleAuthFunc } = useContext(AuthContext);
//   const theme = isLightTheme ? light : dark;
//   return (
//     <nav style={{ background: theme.ui, color: theme.syntax }}>
//       <h1>context app</h1>
//       <button onClick={toggleAuthFunc}>
//         {isAuthenticated ? "logged in" : "logged out"}
//       </button>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
// };

export default Navbar;
