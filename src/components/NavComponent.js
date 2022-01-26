import React from 'react';
import {Link, NavLink} from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavComponent.css'
export default function NavComponent() {
  return <div>
      <>
  
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">MovieBlog</Navbar.Brand>
    <Nav className="mx-auto">
      <NavLink to="/movies" activeClassName="selected">Movies</NavLink>
      <NavLink to="/favourite" activeClassName="selected">Favourites</NavLink>
      <NavLink to="/login" activeClassName="selected">Login</NavLink>
      <NavLink to="/register" activeClassName="selected">Register</NavLink>

    </Nav>
    </Container>
  </Navbar>
</>
  </div>;
}
