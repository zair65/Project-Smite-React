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
      <div className="Everything Account_login">
  <Home/>
<div class="container">
  <h2>It's now or never</h2>
  <h1>Come on , Join us!</h1>
  
  <form action="" id="join-us">
    <div class="fields">
      <span>
       <input placeholder="Name" type="text" />
    </span>
    <br />
     <span>
       <input placeholder="Password" type="password" />
    </span>
    </div>
    <div class="submit">
      <input class="submit" value="Sign In" type="button" />
    </div>
  </form>
</div>
    </div>
    );
  }

}
export default NameForm; 

