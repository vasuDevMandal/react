import React, { createContext, Component } from "react";

// ****DO NOT FORGET
// always export context
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };

  toggleTheme = () => {
    this.setState((prevState) => {
      return { isLightTheme: !prevState.isLightTheme };
    });
    // this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  render() {
    return (
      // https://www.youtube.com/watch?v=CGRpfIUURE0&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=3
      // this 'value' property has the data we want to provide to every component that wraps
      // <ThemeContextProvider> tags in Apps.js
      // these tags are provided by the createcontext itself.

      // we passing an object with spread operator it spread the state object
      // all the properties inside state object is spread out in this new object
      <ThemeContext.Provider
        value={{ ...this.state, toggleThemeFunc: this.toggleTheme }}
      >
        {
          //calling the attached component inside themeContext
          this.props.children
        }
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
