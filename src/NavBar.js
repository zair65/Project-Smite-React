import React, { Component } from 'react';
import * as N from 'react-bootstrap';
import { Route,NavLink, BrowserRouter} from "react-router-dom";
import Home from "./Home";

class NavBar extends Component      {
 
  handleSelect = (eventKey) =>{
  };
 
  render()  {
  return(
    <BrowserRouter>
 <div className="NavigationBar">
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
  <N.Navbar inverse collapseOnSelect>
  <N.Navbar.Header>
    <N.Navbar.Brand>
     Smite:
    </N.Navbar.Brand>
    <N.Navbar.Toggle />
  </N.Navbar.Header>
  <N.Navbar.Collapse>
    <N.Nav>
    <NavLink exact to="/Home">Home</NavLink>
    
      <N.NavItem eventKey={2} title="Sign in">Sign In
      </N.NavItem>
      <N.NavDropdown eventKey={3} title="Information" id="basic-nav-dropdown">
        <N.MenuItem eventKey={3.1}>Gods</N.MenuItem>
        <N.MenuItem eventKey={3.2}>Items</N.MenuItem>
        <N.MenuItem eventKey={3.3}>Skins</N.MenuItem>
        <N.MenuItem divider />
        <N.MenuItem eventKey={3.3}>Summary</N.MenuItem>
      </N.NavDropdown>
    </N.Nav>
    <N.Nav pullRight>
      <N.NavItem eventKey={1} href="#">
        Sign out
      </N.NavItem>
    </N.Nav>
  </N.Navbar.Collapse>
</N.Navbar>
<Route exact path="/home" component={Home} />
</div>
</BrowserRouter>
  );
}

}
export default NavBar;