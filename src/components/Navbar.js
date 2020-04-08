import React from 'react'
import '../App.css';
import * as ReactBootStrap from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


const Navbar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="primary" variant="dark">
        <ReactBootStrap.Navbar.Brand href="/Index">Personal Trainer</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link to="/Customers">
              <ReactBootStrap.Nav.Link href="/Customers">Customers</ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/Trainings">
              <ReactBootStrap.Nav.Link href="Trainings">Trainings</ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/Calendar">
              <ReactBootStrap.Nav.Link href="/Calendar">Calendar</ReactBootStrap.Nav.Link>
            </Link>
            <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="#deets">Something</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
              Something more
      </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  )
}

export default Navbar;