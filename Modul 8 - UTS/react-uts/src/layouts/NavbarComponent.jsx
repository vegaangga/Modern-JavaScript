import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import {
//   MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
//   MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
// } from "mdbreact";
// import { BrowserRouter as Router } from 'react-router-dom';

const Navbarcomponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" sticky="top" style={{backgroundColor: "#4caf50"}}>
      <Container>
        <Navbar.Brand style={{color: "white"}}>Wind Free AC</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  className="me-auto">
            <Nav.Link as={Link} to="/" style={{color: "white"}}>
              <span>Home</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/product" style={{color: "white"}}>
              <span>Products</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" style={{color: "white"}}>
              <span>Carts</span>
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/transaction">
              <span>Transactions</span>
            </Nav.Link> */}
            <Nav.Link as={Link} to="/about" style={{color: "white"}}>
              <span>About</span>
            </Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link as={Link} to="/login">
              <span>Login</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <span>Logout</span>
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarcomponent;
