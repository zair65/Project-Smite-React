import React, { Component } from 'react';
import Home from './Home.js';
import axios from 'axios';
import { Button} from 'reactstrap';

class UpdateAccount extends React.Component {
  constructor() {
    super();
    this.state = {
        Account:[],
        UserName: "",
        Password: "",
        Email: "",
        NewUserName: "",
         NewPassword: "",
         NewEmail1: "",

    };

  }

  handleUserNameChange = (event) => {
    this.setState({UserName: event.target.value});
  }

 handleNewUserNameChange = (event) => {
    this.setState({NewUserName: event.target.value});
  }

 handleNewpasswordChange = (event) => {
    this.setState({NewPassword: event.target.value});
  }

  handleNewEmailChange = (event) => {
    this.setState({NewEmail: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({Email: event.target.value});
  }
  handlePasswordChange = (event) => {
    this.setState({Password: event.target.value});
  }
  
  handleUpdate = (id) => {

            axios({
                method: "put",
                url: "http://localhost:8081/Smite/api/SmitePath/UpdateAccount/" + id,   
              data: { 
                UserName:this.state.NewUserName,
               Password: this.state.NewPassword,
                    Email: this.state.NewEmail }
       
                    });
          
           this.props.history.push('/Home');
   
       console.log("match2");
  }

   
   handleAllAccount = () => {

            axios({
                method: "get",
                url: "http://localhost:8081/Smite/api/SmitePath/getAllAccounts",   
        responseType: "json"
        }).then(response => {
            console.log(response);
            let accounts = response.data;
            for(let account=0; account<accounts.length; account++){
                if(accounts[account].UserName === this.state.UserName && accounts[account].Password===this.state.Password && accounts[account].Email===this.state.Email){
                    console.log("match");
                    this.setState({
                        Account:accounts[account]
                    });
                    console.log(this.state.Account.id);
                    this.handleUpdate(this.state.Account.id);
                }


            }
        })
    
  }


  render () {
    
    return (
      <div className="Everything Account_login">
  <div className="Everything Account_login">
     <div className="SmiteTitle">
<div class="enjoy-css">Smite</div>
<link async href="/Account_login" data-generated="http://enjoycss.com" rel="stylesheet" type="text/css"/>
            </div>
      <div className="Subposition"> 
            <div class="SubTitle">Battleground of the Gods</div>   
             </div> 
              </div>  
<div class="container">
  <h1>Enter new Details to update your account</h1>
  
  <form action="" id="join-us">
    <div class="fields">
      <span>
       <input placeholder="Enter UserName" type="text" defaultValue={this.state.UserName} onChange={this.handleUserNameChange} />
    </span>
    <br />
  <span>
       <input placeholder="Enter new UserName" type="text" defaultValue={this.state.NewUserName} onChange={this.handleNewUserNameChange} />
    </span>
  <br />
     <span>
       <input placeholder="Enter Password" type="password" defaultValue={this.state.Password} onChange={this.handlePasswordChange} />
    </span>
    <br />
  <span>
       <input placeholder="Enter new Password" type="text" defaultValue={this.state.NewPassword} onChange={this.handleNewPasswordChange} />
    </span>
  <br />
     <span>
       <input placeholder="Enter Email" type="email" defaultValue={this.state.Email} onChange={this.handleEmailChange} />
    </span>
    <br />
     <span>
       <input placeholder="Enter new Email" type="email" defaultValue={this.state.NewEmail} onChange={this.handleNewEmailChange} />
    </span>
    </div>
    <Button className="UpdateAccButton" onClick={this.handleAllAccount}>Update Account</Button>
  </form>
</div>
    </div>
    );
  }

}
 
export default UpdateAccount; 