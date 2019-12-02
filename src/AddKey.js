import React, { Component } from 'react';
import Axios from 'axios';
import './Add.css';




export default class Addkey extends Component {

    constructor() {
        super()
        this.state = {
            keyName:'',
            keyValue: '',
        }
    }
    
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state.keyValue)
    }
    onSubmitKey = () => {
        const data = {
            "name": this.state.keyName,
            "value": this.state.keyValue
        }
        console.log(data)
        const URL = "http://localhost:4000/envs"
        Axios.post(URL, data)
    }
     
    render() {
        return (
            <div>
            <div>
<header class="grid header">
<h1>REACT APP</h1>    
<ul className="color">
              <li><a classs href="home">Home</a></li>
       <li><a href="add">Create new key value</a></li>
      <li><a href="ViewKey">ViewKey All</a></li>
          </ul>
  </header>
  
  </div>
         <div className ="app">
             <h2>REACT SIMPLE APP</h2>
          <h4>ENTER KEY </h4>
                <input type="text" name='keyName'  placeholder="KEY NAME "  onChange={this.handleChange} /><br/>

                <input type="text" name='keyValue'  placeholder="KEY VALUE "  onChange={this.handleChange} /><br/>

                <button type="button" onClick={this.onSubmitKey} >CREATE</button>
              
        
</div>
  

</div>  
        )}
}

                
            
