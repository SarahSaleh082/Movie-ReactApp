import React from 'react';
import {Link} from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
export default function NavComponent() {
  return <div>
      <>
  
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">MovieBlog</Navbar.Brand>
    <Nav className="mx-auto">
      <Link to="/">Movies</Link>
      <Link to="/favourite">Favourites</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>

    </Nav>
    </Container>
  </Navbar>
</>
  </div>;
}
