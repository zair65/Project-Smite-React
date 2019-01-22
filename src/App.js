import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import NameForm from './Account_login.js';
import Home from "./Home";
import { Route,NavLink, BrowserRouter} from "react-router-dom";


class App extends Component {
  render() {
    return (     
      <BrowserRouter>
     <div className="App">
         <NavBar/>      
         <Route path="/home" component={Home} />
          </div>  
    </BrowserRouter> 
    );
  }
}

export default App;
