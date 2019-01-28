import React, { Component } from 'react';
import Home from './Home.js';
import axios from 'axios';
import { Button} from 'reactstrap';

class CreateAccount1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Username: "",
        Password: "",
        PasswordConf: "",
        Email: ""
    };

  }

  handleUserNameChange(event) {
    this.setState({Username: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({Email: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({Password: event.target.value});
  }
  handleConfPasswordChange(event) {
    this.setState({PasswordConf: event.target.value});
  }
  
    handleSign_In = () => {
        if (this.state.Password === this.state.PasswordConf) {

            axios({
                method: "post",
                url: "http://localhost:8081/Smite/api/SmitePath/CreateAccount",
                data: {
                    Username: this.state.Username,
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
  <Home/>
<div class="container">
  <h2>It's now or never</h2>
  <h1>Come on , Join the fun!</h1>
  
  <form action="" id="join-us">
    <div class="fields">
      <span>
       <input placeholder="Name" type="text" value={this.state.Username} onChange={this.handleUsernameChange} />
    </span>
    <br />
     <span>
       <input placeholder="Password" type="password" value={this.state.Password} onChange={this.handlePasswordChange} />
    </span>
    <br />
     <span>
       <input placeholder="PasswordConf" type="password" value={this.state.PasswordConf} onChange={this.handleConfPasswordChange} />
    </span>
    <br />
     <span>
       <input placeholder="Email" type="email" value={this.state.Email} onChange={this.handleEmailChange} />
    </span>
    </div>
    <Button className="CreateAccButton" onClick={this.handleSign_In}>Create Account</Button>
  </form>
</div>
    </div>
    );
  }

}
export default CreateAccount1; 