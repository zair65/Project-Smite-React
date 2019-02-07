import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import NameForm from './Account_login.js';
import Home from './Home.js';
import Gods from './Gods.js';
import CreateAccount from './CreateAccount.js';
import DeleteAccount from './DeleteAccount.js';
import UpdateAccount from './UpdateAccount.js';
import Accounts from './Accounts.js';
import SmiteLogo from './SmiteLogo.png';
import { BrowserRouter as Router, Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div className="App">
  <NavBar/> 
         <div className="Logocontainer">
          <img  src={SmiteLogo} alt="fireSpot"/>
          </div>
          </div>
  );
};
      
}

export default App;