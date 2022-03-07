import React, { Component } from "react";
import { CarContext } from "../context/CarContext";

class ContextConsumerClass extends Component {
  render() {
    return (
      <CarContext.Consumer>
        {(context) => {
          const { carBrand, model, ownCar } = context;
          return (
            <div>
              <h3>context consumer class</h3>
              <h5>{carBrand}</h5>
              <h5>{model}</h5>
              <h5>owncar : {ownCar.toString()}</h5>
            </div>
          );
        }}
      </CarContext.Consumer>
    );
  }
}

export default ContextConsumerClass;
