import React, { Component } from "react";
import "./Uploadkey.css";
import Home from "./Home";
import Axios from "axios";

export default class uploadKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: "",
      keyData: []
    };
  }
  onSubmit = event => {
    event.preventDefault();
    console.log(this.state.filePath);
    var reader = new FileReader();
var array1 = [];
    reader.onload = function(loadedEvent) {
      // result contains loaded file.
      console.log(loadedEvent.target.result);
      array1 = loadedEvent.target.result.split('\r\n');
          const URL = "http://localhost:4000/sample";
          var data ={
            data : array1
          }
    Axios.post(URL, data)
      .then(res =>{
        console.log( res.data)
         this.setState({ keyData: res.data });
      })
      .catch(err =>{
        console.log(err)
      })  
    };
    reader.readAsText(this.state.filePath)
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
            {this.state.keyData.map(data => (
              <tr>
                  <td>
                    {data.name}
                  </td>
                  <td>{data.value}</td>
                  </tr>
              ))}
        </div>
      </div>
    );
  }
}
