import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "jon",
      textarea: "article..",
      fruit: "mango",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log("a name was submitted.");
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });

    // switch (event.target.name) {
    //   case "name":
    //     this.setState({ name: event.target.value });
    //     break;

    //   case "textarea":
    //     this.setState({ textarea: event.target.value });
    //     break;

    //   case "fruit":
    //     this.setState({ fruit: event.target.value });
    //     break;

    //   default:
    //     break;
    // }
  }

  render() {
    return (
      <div className="form">
        <h3>simple form</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </label>

          <label>
            Essay:
            <textarea
              name="textarea"
              value={this.state.textarea}
              onChange={this.handleChange}
              placeholder="write something..."
            ></textarea>
          </label>

          <label htmlFor="fruits">
            <select
              name="fruit"
              value={this.state.fruit}
              onChange={this.handleChange}
            >
              <option value="grapes">grapes</option>
              <option value="mango">mango</option>
              <option value="cherry">cherry</option>
              <option value="lime">lime</option>
              <option value="banana">banana</option>
            </select>
          </label>

          <input type="submit" value="submit" />
        </form>
        <div>name: {this.state.name}</div>
        <div>essay: {this.state.textarea}</div>
        <div>fruit: {this.state.fruit}</div>
      </div>
    );
  }
}

export default Form;
