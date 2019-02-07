import React, { Component } from 'react';
import Home from './Home.js';
import axios from 'axios';
import { Button} from 'reactstrap';

class CreateGod extends React.Component {
  constructor() {
    super();
    this.state = {
        God: "",
        GodType: "",
        Pantheon: "",
    };

  }

  handleGodChange = (event) => {
    this.setState({God: event.target.value});
  }
  handleGodTypeChange = (event) => {
    this.setState({GodType: event.target.value});
  }
  handlePantheonChange = (event) => {
    this.setState({Pantheon: event.target.value});
  }


  
    handleGod_Create = () => {
     
            axios({
                method: "post",
                url: "http://localhost:8081/Smite/api/SmitePath/AddGod",
                data: {
                    God: this.state.God,
                    Pantheon: this.state.Pantheon,
                    GodType: this.state.GodType
                }
            });
            this.props.history.push('/');
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
  <h2>It's now or never</h2>
  <h1>Come on , Join the fun!</h1>
  
  <form action="" id="join-us">
    <div class="fields">
      <span>
       <input placeholder="Godname" type="text" value={this.state.God} onChange={this.handleGodChange} />
    </span>
    <br />
     <span>
       <input placeholder="GodType" type="email" value={this.state.Pantheon} onChange={this.handlePantheonChange} />
    </span>
    <br />
     <span>
       <input placeholder="Pantheon" type="password" value={this.state.GodType} onChange={this.handleGodTypeChange} />
    </span>  
    </div>
    <Button className="CreateAccButton" onClick={this.handleGod_Create}>Create God</Button>
  </form>
</div>
    </div>
    );
  }

}
export default CreateGod; 