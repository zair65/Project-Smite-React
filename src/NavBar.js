import React, { Component } from 'react';
import * as N from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import Home from './Home';
import NameForm from './Account_login.js';
import Gods from './Gods.js';

class NavBar extends Component {

  handleSelect = (eventKey) => {
  };

  render() {
    return (
      <Router>
        <div className="NavigationBar">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
          <N.Navbar inverse collapseOnSelect>
            <N.Navbar.Header>
              <N.Navbar.Brand>
                <a href="#" class="pull-left"><img src="/path/to/SmiteLogo.png"></img></a>
              </N.Navbar.Brand>
              <N.Navbar.Toggle />
            </N.Navbar.Header>
            <N.Navbar.Collapse>
              <N.Nav>
                <N.NavItem eventKey={2} title="Home" href="/">
                  Home
      </N.NavItem>
                <N.NavItem eventKey={2} title="Account" href="/Account_login">Account
      </N.NavItem>
                <N.NavDropdown eventKey={3} title="Information" id="basic-nav-dropdown">
                  <N.MenuItem eventKey={3.1} href="/Gods">Gods
                  </N.MenuItem>
                  <N.MenuItem eventKey={3.2}>Items</N.MenuItem>
                  <N.MenuItem eventKey={3.3}>Pantheons</N.MenuItem>
                  <N.MenuItem divider />
                  <N.MenuItem eventKey={3.3}>Summary</N.MenuItem>
                </N.NavDropdown>
              </N.Nav>
              <N.Nav pullRight>
                <div className="Search">
                <form>

                  <div class="input-field">

                    <input type="text" class="form-control" placeholder="Search" id="txtSearch" />

                  </div>
                </form>
                </div>
              </N.Nav>
            </N.Navbar.Collapse>
          </N.Navbar>
          <Route path="/Account_login" component={NameForm} />
          <Route exact path="/" component={Home} />
          <Route path="/Gods" component={Gods} />

        </div>
      </Router>
    );
  }

}
export default NavBar;