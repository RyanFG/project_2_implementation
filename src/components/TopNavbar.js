import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNavbar() {
    return (
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="/">Whittle Creations</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/ForSale">For Sale</Nav.Link>
              <Nav.Link href="/PrevWorks">Previous Works</Nav.Link>
              <Nav.Link href="/CreateRequest">Order Now</Nav.Link>
              <Nav.Link href="/Tips">Carving Tips</Nav.Link>
              <Nav.Link href="/Month">Monthly Stats</Nav.Link>
              <Nav.Link href="/About">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default TopNavbar;