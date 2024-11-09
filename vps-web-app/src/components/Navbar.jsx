import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import nbar from '../images/nav.webp';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img height="64" width="163" src={nbar} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Product</Nav.Link>
            <NavDropdown title="Location" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">North America</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Europe</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Middle East</NavDropdown.Item>
              {/* Add more items here */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Link to="/signup">
              <Button variant="primary">
                Sign Up <span style={{ fontWeight: 'bold' }}>&#8594;</span>
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
