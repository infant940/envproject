import React, { Component } from "react";
import Axios from "axios";
import Home from "./Home";

export default class Addkey extends Component {
  constructor() {
    super();
    this.state = {
      keyName: "",
      keyValue: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.keyValue);
  };
  onSubmitKey = () => {
    const data = {
      name: this.state.keyName,
      value: this.state.keyValue
    };
    console.log(data);
    const URL = "http://localhost:4000/envs";
    Axios.post(URL, data);
  };

  render() {
    return (
      <div>
        <div>
          <Home />
        </div>
        <div className="app">
          <h2>REACT SIMPLE APP</h2>
          <h4>ENTER KEY </h4>
          <input
            type="text"
            name="keyName"
            placeholder="KEY NAME "
            onChange={this.handleChange}
          />
          <br />

          <input
            type="text"
            name="keyValue"
            placeholder="KEY VALUE "
            onChange={this.handleChange}
          />
          <br />

          <button type="button" onClick={this.onSubmitKey}>
            CREATE
          </button>
        </div>
      </div>
    );
  }
}
