import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../assets/css/navigation.css'
import image from "../assets/images/img-geometrical.png"

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top"
    style={{backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover",}}>
      <Container>
        <Navbar.Brand style={{ color: "white" }}>John Huber</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ color: "white" }}>
            <Nav.Link href="/" style={{ color: "white" }}>About</Nav.Link>
            <Nav.Link href="/portfolio" style={{ color: "white" }}>Portfolio</Nav.Link>
            <Nav.Link href="/contact" style={{ color: "white" }}>Contact</Nav.Link>
            <Nav.Link href="/resume" style={{ color: "white" }}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;