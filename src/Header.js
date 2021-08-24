import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar className="navbar navbar-dark bg-transparent" variant="light">
        <Container>
          <Navbar.Brand href="#home">Tvish</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Why Tvish</Nav.Link>
            <Nav.Link href="#features">How it Works?</Nav.Link>
            <Nav.Link href="#pricing">Contact us</Nav.Link>
            <Button className="btn bg-transparent">Request Demo</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
