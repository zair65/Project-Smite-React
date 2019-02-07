import React, { Component } from 'react';
import axios from 'axios';

class Gods extends Component {
 constructor(props) {
        super(props);

        this.state = { God: [] };
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:8081/Smite/api/SmitePath/getGods", 
            responseType: "json"
        }).then(response => {
          console.log(response);
            this.setState({ God: response.data });
        })
    }

  
  render() {
  const Gods = this.state.God.map((item, i) => (
            <tr>
                <td>{item.id}</td>
                <td>{item.God}</td>
                <td>{item.GodType}</td>
                <td>{item.Pantheon}</td>
            </tr>
        ));
      
    return (
        
      <div className="AllGods">  
           <div className="God_info">
          <h1>Gods</h1> 
          <table class="table GodTable">
    <thead>
    <tr>
      <th>#</th>
      <th>God</th>
      <th>GodType</th>
      <th>Pantheon</th>
    </tr>
  </thead>
  <tbody>
    {Gods}
  </tbody>
</table>
 </div>
   </div>
    );
}
}

export default Gods;