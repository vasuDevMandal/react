import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";

const scalesNames = {
  f: "Fahrenheit",
  c: "Celcius",
};
class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    // this.state = { temperature: "" };
    this.handleTemp = this.handleTemp.bind(this);
  }
  handleTemp(event) {
    // this.setState({ temperature: event.target.value });
    this.props.onTemperatureChange(event.target.value);
  }
  render() {
    const temperature = this.props.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in {scalesNames[this.props.scale]}: </legend>
        <input
          type="text"
          value={temperature}
          onChange={this.handleTemp}
          name="temperature"
        />
        <BoilingVerdict celcius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
