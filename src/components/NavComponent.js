import React from 'react';
import {Link, NavLink} from "react-router-dom";
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import './NavComponent.css';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { useSelector, useDispatch } from "react-redux";
import Languages from './Languages';
export default function NavComponent() {
  let count = useSelector((state)=> state.favourite.length)
  return <div>
      <>
  
  <Navbar bg="dark" variant="dark">
    <Container>
      
    <Navbar.Brand href="#home">MovieBlog</Navbar.Brand>
    <Nav className="mx-4 mb-2 mb-lg-0">
      <NavLink to="/movies" className="px-2 tab" activeClassName="selected">Movies</NavLink>
      <NavLink to="/favourite" className="px-2 tab" activeClassName="selected"> <Badge bg="secondary">{count}
                  <BsFillBookmarkStarFill color="#fff" size={25} />
                </Badge></NavLink>
                <Languages />
      <NavLink to="/login" className="px-2 tab" activeClassName="selected">Login</NavLink>
      <NavLink to="/register" className="px-2 tab" activeClassName="selected">Register</NavLink>

    </Nav>
    </Container>
  </Navbar>
</>
  </div>;
}
