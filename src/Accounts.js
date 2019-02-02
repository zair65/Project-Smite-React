import React, { Component } from 'react';
import axios from 'axios';

class Accounts extends Component {
 constructor(props) {
        super(props);

        this.state = { Account: [] };
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:8080/Smite/api/SmitePath/getAllAccounts", 
            responseType: "json"
        }).then(response => {
          console.log(response);
          let accounts = response.data;
            this.setState({ Account: accounts });
        })
    }

  
  render() {
  const Accounts = this.state.Account.map((item, i) => (
            <tr>
                <td>{item.id}</td>
                <td>{item.UserName}</td>
                <td>{item.Password}</td>
                <td>{item.Email}</td>
            </tr>
        ));
      
    return (
        
      <div className="AllGods">  
           <div className="God_info">
          <h1>Accounts</h1> 
          <table class="table GodTable">
    <thead>
    <tr>
      <th>#</th>
      <th>UserName</th>
      <th>Password</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {Accounts}
  </tbody>
</table>
 </div>
   </div>
    );
}
}

export default Accounts;