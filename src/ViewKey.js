import React from "react";
import axios from "axios";
import "./ViewKey.css";

export default class ViewKey extends React.Component {
  constructor() {
    super();
    this.state = {
      keyName: [],
      keyValue: [],
      orgKeyName: "",
      keyNameBeforeUpdate: "",
      keyValueBeforeUpdate: "",
      editKeyName: "",
      editKeyValue: "",
      editBtnStatus: true
    };
  }
  refreshKeys = () => {
    axios.get("http://localhost:4000/envs").then(res => {
      console.log(res);
      this.setState({ keyName: res.data });
    });
  };
  componentDidMount() {
    this.refreshKeys();
  }
  onClickEdit = event => {
    this.setState({ orgKeyName: event.target.name })
    this.setState({ keyNameBeforeUpdate: event.target.name });
    this.setState({ keyValueBeforeUpdate: event.target.value });
    this.setState({ editBtnStatus: false });
  };

  onClickCancel = () => {
    this.setState({ editBtnStatus: true });
    this.refreshKeys();
  };

  updateKey = event => {
    event.preventDefault();
    const keyName = {
      name: this.state.keyNameBeforeUpdate,
      value: this.state.keyValueBeforeUpdate,
      update: this.state.orgKeyName
    };
    axios.put("http://localhost:4000/envs", keyName).then(res => {
      this.setState({ editBtnStatus: true });
      this.refreshKeys();
    });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.keyNameBeforeUpdate+"--"+this.state.keyValueBeforeUpdate)
  };

  deleteKey = event => {
    event.preventDefault();
    console.log(event.target.name + event.target.value);
    axios
      .delete("http://localhost:4000/envs/" + event.target.name)
      .then(res => {
        this.refreshKeys();
      });
  };

  render() {
    return (
      <div>
<div>
 <header class="grid header-layout">
<h1>REACT APP</h1>    
<ul>
              <li><a href="home">Home</a></li>
       <li><a href="add">Create new key value</a></li>
      <li><a href="ViewKey">ViewKey All</a></li>
          </ul>
  </header>
  
  </div>
 <div class="env">
          <h3> APP KEY LIST </h3>
          {this.state.editBtnStatus ? (
            <table>
              <tr>
                <th>name</th>
                <th>Action</th>
              </tr>
              {this.state.keyName.map(key => (
                <tr key={key.name} value={key.value} update={key.updateKey}>
                  <td
                    key={key.name}
                    value={key.value}
                    update={key.updateKey}
                    onChange={this.handleChange}
                    contenteditable={
                      this.state.editBtnStatus ? "false" : "true"
                    }
                  >
                    {key.name} = {key.value}
                  </td>
                  <td>
                    <button
                      name={key.name}
                      value={key.value}
                      updateKey={key.updateKey}
                      onClick={this.onClickEdit}
                    >
                      edit
                    </button>
                    <button
                      name={key.name}
                      value={key.value}
                      onClick={this.deleteKey}
                    >
                      remove
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          ) : (
            <div>
              <input
                type="text"
                name="keyNameBeforeUpdate"
                value={this.state.keyNameBeforeUpdate}
                onChange={this.handleChange}
              />

              <input
                type="text"
                name="keyValueBeforeUpdate"
                value={this.state.keyValueBeforeUpdate}
                onChange={this.handleChange}
              />

              <button type="button" onClick={this.updateKey}>
                save
              </button>
              <button type="button" onClick={this.onClickCancel}>
                Cancel
              </button>

              
            </div>
          )}
      </div>
   
       </div>
    );
  }
}
