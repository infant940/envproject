import React, { Component } from "react";
import Home from "./Home";
import Axios from "axios";
let fileData = [];
export default class uploadKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: "",
      keyData: {
        existing: [],
        missing: []
      }
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    console.log("FileData" + fileData);
    Axios.post("http://localhost:4000/sample", { data: fileData })

      .then(res => {
        console.log(res.data);
        this.setState({ keyData: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  onChange = event => {
    const fileName = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(loadedEvent) {
      console.log(loadedEvent.target.result);
      fileData = loadedEvent.target.result.split("\r\n");
      console.log(fileData);
    };
    console.log("Filename" + fileName);
    reader.readAsText(fileName);
    this.setState({ fileData: fileData });
    console.log(fileData);
  };
  render() {
    return (
      <div>
        <div>
          <Home />
          <form class="upload">
            <h1>File Upload</h1>
            <input type="file" onChange={this.onChange} />
            <br />
            <button type="submit" onClick={this.onSubmit}>
              Upload
            </button>
          </form>
          <div class="file">
            <h4>Filekey List</h4>
            <table>
              <tr>
                <th>key</th>
                <th>value</th>
              </tr>

              {this.state.keyData.existing.map(data => (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.value}</td>
                </tr>
              ))}
            </table>
            <h4>missing</h4>
            <table>
              <tr>
                <th>key</th>
              </tr>
              {this.state.keyData.missing.map(data => (
                <tr>
                  <td>{data}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
