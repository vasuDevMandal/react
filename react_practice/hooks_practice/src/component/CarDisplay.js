import React, { Component } from "react";
import { CarContext } from "../context/CarContext";

class CarDisplay extends Component {
  static contextType = CarContext;
  render() {
    console.log(this.context);

    return (
      <div className="brands">
        <h1>car brands and years</h1>
      </div>
    );
  }
}

export default CarDisplay;
