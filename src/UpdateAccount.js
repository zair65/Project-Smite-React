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
        UserName1: "",

    };

  }

  handleUserNameChange = (event) => {
    this.setState({UserName: event.target.value});
  }

 handleUserName1Change = (event) => {
    this.setState({UserName1: event.target.value});
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
                url: "http://localhost:8081/Smite/api/SmitePath/UpdateAccount",
                data: {
                    UserName1: this.state.UserName,
                  
                }
            });
            this.props.history.push('/');
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
                    this.handleUpdate(this.state.Account.id);
                }


            }
        })
    
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
       <input placeholder="Name" type="text" defaultValue={this.state.UserName} onChange={this.handleUserNameChange} />
    </span>
    <br />
  <span>
       <input placeholder="Name" type="text" defaultValue={this.state.UserName1} onChange={this.handleUserName1Change} />
    </span>
  <br />
     <span>
       <input placeholder="Password" type="password" defaultValue={this.state.Password} onChange={this.handlePasswordChange} />
    </span>
    <br />
     <span>
       <input placeholder="Email" type="email" defaultValue={this.state.Email} onChange={this.handleEmailChange} />
    </span>
    </div>
    <Button className="UpdateAccButton" onClick={this.handleUpdate}>Update Account</Button>
  </form>
</div>
    </div>
    );
  }

}
export default UpdateAccount; 