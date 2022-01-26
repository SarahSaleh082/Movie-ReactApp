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
    <Nav className="mx-4 mb-2 mb-lg-0">
      <NavLink to="/movies" className="px-2 tab" activeClassName="selected">Movies</NavLink>
      <NavLink to="/favourite" className="px-2 tab" activeClassName="selected">Favourites</NavLink>
      <NavLink to="/login" className="px-2 tab" activeClassName="selected">Login</NavLink>
      <NavLink to="/register" className="px-2 tab" activeClassName="selected">Register</NavLink>

    </Nav>
    </Container>
  </Navbar>
</>
  </div>;
}
