import React, { Component, createContext } from "react";

export const CarContext = createContext();

class CarContextProvider extends Component {
  state = {
    carBrand: ["maruti", "hyundai", "kia", "bmw", "audi"],
    model: [2019, 2021, 2013, 2016, 2022],
    ownCar: false,
  };

  render() {
    return (
      <CarContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </CarContext.Provider>
    );
  }
}

export default CarContextProvider;
