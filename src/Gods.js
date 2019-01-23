import React, { Component } from 'react';

class Gods extends Component {
    render() {
    return (
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
    );
}
}

export default Gods;