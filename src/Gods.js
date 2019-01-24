import React, { Component } from 'react';
import axios from 'axios';

class Gods extends Component {
    constructor()  { 
     super(); 
   
   this.state = {
    Gods:"", 
    GodType="", 
    Pantheon="",
  };
 }

    handleGodChange = (event) => {
        this.setState({ username: event.target.value });
    }
    handleGodTypeChange = (event) => {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }


  componentDidMount() {
    axios.get(`http://localhost:3000/Smite/api/SmitePath/getGods`)
      .then(res => {
        const Gods = res.data;
        this.setState({ Gods });
        console.log(res.data);
      })
  }
  
  
  render() {
    return (
      <div className="AllGods">  
      <ul>
        { this.state.Gods.map(God => <li>{God.name}</li>)}
      </ul>
           <div className="God_info">
          <h1>Gods</h1> 
          <table class="table GodTable">
    <thead>
    <tr>
      <th>#</th>
      <th>God</th>
      <th>God Type</th>
      <th>Pantheon</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Agni</td>
      <td>Mage</td>
      <td>Hindu</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Fenrir</td>
      <td>Assassin</td>
      <td>Norse</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Susano</td>
      <td>Assassin</td>
      <td>Japanese</td> 
    </tr>
  </tbody>
</table>
 </div>
   </div>
    );
}
}

export default Gods;