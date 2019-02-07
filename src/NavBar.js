import React, { Component } from 'react';
import * as N from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import Home from './Home';
import NameForm from './Account_login.js';
import Gods from './Gods.js';
import CreateGod from './CreateGod.js';
import DeleteGod from './DeleteGod.js';
import UpdateGod from './UpdateGod.js';
import CreateAccount from './CreateAccount.js';
import DeleteAccount from './DeleteAccount.js';
import UpdateAccount from './UpdateAccount.js';
import Accounts from './Accounts.js';

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
              <N.Navbar.Toggle />
            </N.Navbar.Header>
            <N.Navbar.Collapse>
              <N.Nav>
                <N.NavItem  title="Home" href="/Home">
                  Home
      </N.NavItem>
      <N.NavDropdown eventKey={2} title="Gods" id="basic-nav-dropdown">
                  <N.MenuItem eventKey={2.1} href="/CreateGod">Register God
                  </N.MenuItem>
                  <N.MenuItem eventKey={2.2} href="/DeleteGod">Delete God
                  </N.MenuItem>
                  <N.MenuItem eventKey={2.3} href="/UpdateGod">Update God
                  </N.MenuItem>
                   <N.MenuItem eventKey={2.4} href="/Gods">Gods
                  </N.MenuItem>
                </N.NavDropdown>
                <N.NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                  <N.MenuItem eventKey={3.1} href="/Account_login">Log In
                  </N.MenuItem>
                  <N.MenuItem eventKey={3.2} href="/CreateAccount">Register Account
                  </N.MenuItem>
                  <N.MenuItem eventKey={3.3} href="/DeleteAccount">Delete Account
                  </N.MenuItem>
                  <N.MenuItem eventKey={3.3} href="/UpdateAccount">Update Account
                  </N.MenuItem>
                   <N.MenuItem eventKey={3.4} href="/Accounts">Accounts
                  </N.MenuItem>
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
          <Route exact path="/Home" component={Home} />
          <Route path="/Gods" component={Gods} />
          <Route path="/CreateGod" component={CreateGod} />
          <Route path="/UpdateGod" component={UpdateGod} />
          <Route path="/DeleteGod" component={DeleteGod} />
          <Route path="/CreateAccount" component={CreateAccount} />
          <Route path="/DeleteAccount" component={DeleteAccount} />
          <Route path="/UpdateAccount" component={UpdateAccount} />
          <Route path="/Accounts" component={Accounts} />
        </div>
      </Router>
    );
  }

}
export default NavBar;