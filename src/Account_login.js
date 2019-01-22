import React, { Component } from 'react';
import Home from './Home.js';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Username: '', Password:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({Username: event.target.value,
                  Password: event.target.value});
  }


  handleSubmit(event) {
    
    alert('A UserName and password was submitted: ' + this.state.Username +this.state.Password);
  }

  render () {
    
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="FormSpacing">
       <div className="FormColour">
       <div className="Login">
       <h1>User Login</h1></div>
      <div class="form-group">
        <input type="text" class="form-control" id="Username1" aria-describedby="emailHelp" placeholder="Enter Username"/>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="Password1" placeholder="Enter Password"/>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Remember me</label>

      </div>
      <button type="submit" class="btn btn-primary">Log In</button>
      </div>
      </div>
    </form> 
    
    );
  }

}
export default NameForm; 

