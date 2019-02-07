import React, { Component } from 'react';
import Home from './Home.js';
import axios from 'axios';
import { Button} from 'reactstrap';

class CreateAccount extends React.Component {
  constructor() {
    super();
    this.state = {
        UserName: "",
        Password: "",
        PasswordConf: "",
        Email: ""
    };

  }

  handleUserNameChange = (event) => {
    this.setState({UserName: event.target.value});
  }
  handleEmailChange = (event) => {
    this.setState({Email: event.target.value});
  }
  handlePasswordChange = (event) => {
    this.setState({Password: event.target.value});
  }
  handleConfPasswordChange = (event) => {
    this.setState({PasswordConf: event.target.value});
  }
  
    handleSign_In = () => {
        if (this.state.Password === this.state.PasswordConf) {

            axios({
                method: "post",
                url: "http://localhost:8081/Smite/api/SmitePath/AddAccount",
                data: {
                    UserName: this.state.UserName,
                    Password: this.state.Password,
                    Email: this.state.Email
                }
            });
            this.props.history.push('/');
        } else {
            console.log("Passwords don't match");
        }
    }
   

  render () {
    
    return (
      <div className="Everything Account_login">
     <div className="SmiteTitle">
<div class="enjoy-css">Smite</div>
<link async href="/Account_login" data-generated="http://enjoycss.com" rel="stylesheet" type="text/css"/>
            </div>
      <div className="Subposition"> 
            <div class="SubTitle">Battleground of the Gods</div>   
             </div>   
<div class="container">
  <h2>It's now or never, Sign up!</h2>
  <h1>Come on , Join the fun!</h1>
  
  <form action="" id="join-us">
    <div class="fields">
      <span>
       <input placeholder="Name" type="text" defaultValue={this.state.UserName} onChange={this.handleUserNameChange} />
    </span>
    <br />
     <span>
       <input placeholder="Password" type="password" defaultValue={this.state.Password} onChange={this.handlePasswordChange} />
    </span>
    <br />
     <span>
       <input placeholder="PasswordConf" type="password" defaultValue={this.state.PasswordConf} onChange={this.handleConfPasswordChange} />
    </span>
    <br />
     <span>
       <input placeholder="Email" type="email" defaultValue={this.state.Email} onChange={this.handleEmailChange} />
    </span>
    </div>
    <Button className="CreateAccButton" onClick={this.handleSign_In}>Create Account</Button>
  </form>
</div>
    </div>
    );
  }

}
export default CreateAccount; 