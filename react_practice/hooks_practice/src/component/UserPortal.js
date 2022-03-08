import React, { Component } from "react";

class UserPortal extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <div>
          <div>Hello, {this.props.who}</div>
          <h3>Logged In</h3>
        </div>
      );
    } else {
      return (
        <div>
          <div>Hello, {this.props.who}</div>
          <h3>Logged Out</h3>
        </div>
      );
    }
    // return <div>Hello, {this.props.who}</div>;
  }
}

export default UserPortal;
