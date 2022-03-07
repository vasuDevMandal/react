import React, { Component } from "react";

// const Clock = (props) => {
//   const { date, stoptimer } = props;
//   return (
//     <div className="clock">
//       <span>time: {date.toLocaleTimeString()} </span>
//       <button>stop clock</button>
//     </div>
//   );
// };

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div className="clock">
        <span>time: {this.state.date.toLocaleTimeString()} </span>
        <button onClick={() => clearInterval(this.timerId)}>stop clock</button>
      </div>
    );
  }
}

export default Clock;
