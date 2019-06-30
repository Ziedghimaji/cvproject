import React, { Component } from "react";
import "./Header.css";
import  {Link} from 'react-router-dom'
import Register from "../Authentication/Register";
import { FaAccessibleIcon, FaSistrix } from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  Input
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  register() {
    return <Register />;
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
        <Link className="navbar-brand" to="/">
            <FaAccessibleIcon className="logo" />
          </Link>

          <Input type="text" placeholder="Search..." className="searchBox" />
          <div className="searchIcon">
            <Button>
              <FaSistrix />
            </Button>
          </div>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/howitwork">How it works </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/login">Login</Link>
              </NavItem>
              <NavItem>
              <Link className="nav-link" to="/register">Register</Link>

              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FaSkull/>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
