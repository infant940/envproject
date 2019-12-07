import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <header class="grid heading">
            <h1>REACT APP</h1>
            <ul>
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="add">Create new key value</a>
              </li>
              <li>
                <a href="ViewKey">ViewKey All</a>
              </li>
              <li>
                <a href="Uploadkey">Uploadkey</a>
              </li>
            </ul>
          </header>
        </div>
      </div>
    );
  }
}

export default Home;
