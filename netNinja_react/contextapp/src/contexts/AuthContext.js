import React, { Component, createContext } from "react";

// ****DO NOT FORGET
// always export context
export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
  };

  toggleAuth = () => {
    this.setState((prevState) => {
      return { isAuthenticated: !prevState.isAuthenticated };
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuthFunc: this.toggleAuth }}
      >
        {
          //calling the attached component inside AuthContext
          this.props.children
        }
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
