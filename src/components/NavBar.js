import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <>
      <Navbar className="color-nav" variant="dark" style={{marginTop: '2%'}}>
        <Container>
          <Navbar.Brand href="/" style={{paddingLeft: '10%'}}>
            <img src={logo} style={{height: '100px', width: '70px',}} />
          </Navbar.Brand>
          <Nav className="ms-auto" style={{paddingRight: '10%', fontWeight: 'bold', color: 'white'}}>
            <Nav.Link className="px-2" href="/">Home</Nav.Link>
            <Nav.Link className="px-2" href="/about">About</Nav.Link>
            <Nav.Link className="px-2" href="/education">Education</Nav.Link>
            <Nav.Link className="px-2" href="/workex">Work Experience</Nav.Link>
            <Nav.Link className="px-2" href="/skills">Tech Stacks</Nav.Link>
            <Nav.Link className="px-2" href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link className="px-2" href="/contact">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;
