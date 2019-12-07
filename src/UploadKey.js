import React, { Component } from "react";
import "./Uploadkey.css";
import * as fs from "fs"
import Home from "./Home"


export default class uploadKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: ""
    };
  }
  onSubmit = event => {
    event.preventDefault();
    let data = fs.readFile(this.state.fileName, 'utf8');
    console.log(data)
  };
  onChange = event => {
    debugger
    const fileName = event.target.value;
    this.setState({ filePath: fileName });
    console.log(this.state.filePath);
    
  };
  render() {
    return (
      <div>
        <div>
          <Home />
          <form>
            <h1>File Upload</h1>
            <input type="file" onChange={this.onChange} />
            <br />
            <button type="submit" onClick={this.onSubmit}>
              Upload
            </button>
          </form>
        </div>
      </div>
    );
  }
}
