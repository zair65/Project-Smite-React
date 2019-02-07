import React, { Component } from 'react';
import Home from './Home.js';
import axios from 'axios';
import { Button} from 'reactstrap';

class DeleteGod extends React.Component {
  constructor() {
    super();
  this.state = { Gods: [], 
                God :null,
                GodType:null,
                Pantheon:null

};

  }

  handleDelete = (id) => {

            axios({
                method: "delete",
                url: "http://localhost:8081/Smite/api/SmitePath/DeleteGod/" + id,   
        responseType: "json"
        }).then(response => {
          this.props.history.push('/Home');
        })
    
  }


handleAllGods = () => {

            axios({
                method: "get",
                url: "http://localhost:8081/Smite/api/SmitePath/getGods",   
        responseType: "json"
        }).then(response => {
            console.log(response);
            let gods = response.data;
            for(let god=0; god<gods.length; god++){
                if(gods[god].God === this.state.God && gods[god].Pantheon===this.state.Pantheon && gods[god].GodType===this.state.GodType){
                    console.log("match");
                    this.setState({
                        Gods:gods[god]
                    });
                    this.handleDelete(this.state.Gods.id);
                }


            }
        })
    
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
  <h1>Enter details to delete God</h1>
  
 <form action="" id="join-us">
    <div class="fields">
      <span>
       <input placeholder="God name" type="text" defaultValue={this.state.God} onChange={this.handleGodChange} />
    </span>
    <br />
     <span>
       <input placeholder="God Type" type="text" defaultValue={this.state.GodType} onChange={this.handleGodTypeChange} />
    </span>
    <br />
     <span>
       <input placeholder="Pantheon" type="text" defaultValue={this.state.Pantheon} onChange={this.handlePantheonChange} />
    </span>
    </div>
    <Button className="DeleteAccButton" onClick={this.handleAllGods}>Delete God</Button>
  </form>
</div>
    </div>
    );
  }

}
export default DeleteGod; 