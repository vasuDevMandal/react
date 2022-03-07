import React, { Component } from "react";
import { CarContext } from "../context/CarContext";

class CarDisplay extends Component {
  static contextType = CarContext;
  render() {
    // console.log(this.context);
    const { carBrand, model, ownCar } = this.context;
    let data = ownCar ? carBrand : model;
    // console.log(carBrand);
    // console.log(model);
    // console.log(ownCar);

    return (
      <div className="brands">
        <h1>car brands and years</h1>
        <h3>{data}</h3>
      </div>
    );
  }
}

export default CarDisplay;
