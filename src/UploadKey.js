import React, { Component } from "react";
import "./Uploadkey.css";
import Home from "./Home";
import Axios from "axios";

export default class uploadKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: ""
    };
  }
  onSubmit = event => {
    event.preventDefault();
    console.log(this.state.filePath);
    var reader = new FileReader();

    reader.onload = function(loadedEvent) {
      // result contains loaded file.
      console.log(loadedEvent.target.result);
    };
    reader.readAsText(this.state.filePath, function(data) {
      console.log(data);
          const URL = "http://localhost:4000/sample";
    Axios.post(URL, data)
      .then(res =>{
        console.log("infant"+ res.data)
      })
      .catch(err =>{
        console.log(err)
      })
    });
  };
  onChange = event => {
    const fileName = event.target.files[0];
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
