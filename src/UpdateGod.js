import React, { Component } from 'react';
import Home from './Home.js';
import axios from 'axios';
import { Button} from 'reactstrap';

class UpdateGod extends React.Component {
  constructor() {
    super();
    this.state = {
        Gods:[],
        God: "",
        GodType: "",
        Pantheon: "",
        NewGod: "",
         NewGodType: "",
         NewPantheon: "",

    };

  }

  handleGodChange = (event) => {
    this.setState({God: event.target.value});
  }

 handleNewGodChange = (event) => {
    this.setState({NewGod: event.target.value});
  }

 handleGodTypeChange = (event) => {
    this.setState({GodType: event.target.value});
  }

  handleNewGodTypeChange = (event) => {
    this.setState({NewGodType: event.target.value});
  }

  handlePantheonChange = (event) => {
    this.setState({Pantheon: event.target.value});
  }
  handleNewPantheonChange = (event) => {
    this.setState({NewPantheon: event.target.value});
  }
  
  handleUpdate = (id) => {

            axios({
                method: "put",
                url: "http://localhost:8080/Smite/api/SmitePath/UpdateGod/" + id,   
              data: { 
                God:this.state.NewGod,
               Pantheon: this.state.NewPantheon,
                    GodType: this.state.NewGodType }
       
                    });
          
           this.props.history.push('/Home');
   
       console.log("match2");
  }

   
   handleAllGods = () => {

            axios({
                method: "get",
                url: "http://localhost:8080/Smite/api/SmitePath/getGods",   
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
                    console.log(this.state.Gods.id);
                    this.handleUpdate(this.state.Gods.id);
                }


            }
        })
    
  }


  render () {
    
    return (
      <div className="Everything Account_login">
  <Home/>
<div class="container">
  <h1>Enter new Details to update your account</h1>
  
  <form action="" id="join-us">
    <div class="fields">
      <span>
       <input placeholder="Enter God name" type="text" defaultValue={this.state.God} onChange={this.handleGodChange} />
    </span>
    <br />
  <span>
       <input placeholder="Enter New God name" type="text" defaultValue={this.state.NewGod} onChange={this.handleNewGodChange} />
    </span>
  <br />
     <span>
       <input placeholder="Enter GodType" type="text" defaultValue={this.state.GodType} onChange={this.handleGodTypeChange} />
    </span>
    <br />
  <span>
       <input placeholder="Enter new GodType" type="text" defaultValue={this.state.NewGodType} onChange={this.handleNewGodTypeChange} />
    </span>
  <br />
     <span>
       <input placeholder="Enter Pantheon" type="email" defaultValue={this.state.Pantheon} onChange={this.handlePantheonChange} />
    </span>
    <br />
     <span>
       <input placeholder="Enter new Pantheon" type="email" defaultValue={this.state.NewPantheon} onChange={this.handleNewPantheonChange} />
    </span>
    </div>
    <Button className="UpdateAccButton" onClick={this.handleAllGods}>Update God</Button>
  </form>
</div>
    </div>
    );
  }

}
export default UpdateGod; 