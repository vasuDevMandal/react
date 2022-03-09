import React, { Component, createContext } from "react";

export const CarContext = createContext();

class CarContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carBrand: ["maruti", "hyundai", "kia", "bmw", "audi"],
      model: [2019, 2021, 2013, 2016, 2022],
      ownCar: false,
    };
  }
  updateState() {
    this.setState({ carBrand: ["lamborghini", "ferrari"] });
    console.log("state update");
  }
  // state = {
  //   carBrand: ["maruti", "hyundai", "kia", "bmw", "audi"],
  //   model: [2019, 2021, 2013, 2016, 2022],
  //   ownCar: false,
  // };

  render() {
    return (
      <CarContext.Provider value={{ ...this.state }}>
        {this.props.children}
        {/* <button onClick={() => this.updateState()}>carContext</button>
        <div>{this.state.carBrand.join(" ")}</div>
        <div>{this.state.model}</div>
        <div>{this.state.ownCar.toString()}</div> */}
      </CarContext.Provider>
    );
  }
}

export default CarContextProvider;
