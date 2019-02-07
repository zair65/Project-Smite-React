import React, { Component } from 'react';
import Home from './Home.js';
import axios from 'axios';
import { Button} from 'reactstrap';

class DeleteAccount extends React.Component {
  constructor() {
    super();
  this.state = { Account: [], 
                UserName :null,
                Email:null,
                Password:null

};

  }

  handleDelete = (id) => {

            axios({
                method: "delete",
                url: "http://localhost:8081/Smite/api/SmitePath/DeleteAccount/" + id,   
        responseType: "json"
        }).then(response => {
          this.props.history.push('/Home');
        })
    
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
                    this.handleDelete(this.state.Account.id);
                }


            }
        })
    
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
  <h1>Enter details to delete Account</h1>
  
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
       <input placeholder="Email" type="email" defaultValue={this.state.Email} onChange={this.handleEmailChange} />
    </span>
    </div>
    <Button className="DeleteAccButton" onClick={this.handleAllAccount}>Delete Account</Button>
  </form>
</div>
    </div>
    );
  }

}
export default DeleteAccount; 