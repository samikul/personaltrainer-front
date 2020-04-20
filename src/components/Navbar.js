import React from 'react'
import '../App.css';
import * as ReactBootStrap from 'react-bootstrap'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="light" variant="light">
        <ReactBootStrap.Navbar.Brand href="/Index">Personal Trainer</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link to="/Customers">
              <ReactBootStrap.Nav.Link href="/Customers">Customerlist</ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/Trainings">
              <ReactBootStrap.Nav.Link href="Trainings">Traininglist</ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/Reservations">
              <ReactBootStrap.Nav.Link href="Reservations">Customers with trainings</ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/Calendar">
              <ReactBootStrap.Nav.Link href="/Calendar">Calendar</ReactBootStrap.Nav.Link>
            </Link>
            <ReactBootStrap.NavDropdown title="Personal trainers" id="collasible-nav-dropdown">
              <Link to="/Coachlist">
                <ReactBootStrap.NavDropdown.Item href="/Coacheslist/3.1">List</ReactBootStrap.NavDropdown.Item>
              </Link>
              <Link to="/Coachgrid">
                <ReactBootStrap.NavDropdown.Item href="/Coachesgrid/3.2">Grid</ReactBootStrap.NavDropdown.Item>
              </Link>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <Link to="/Coachlist">
              <ReactBootStrap.Nav.Link href="/Coacheslist">Personal trainer list</ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/Coachgrid">
              <ReactBootStrap.Nav.Link eventKey={2} href="/Coachesgrid">Personal trainer grid</ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  )
}

export default Navbar;