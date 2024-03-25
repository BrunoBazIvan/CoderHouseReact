import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';
import { Icon } from '../Icon/Icon.jsx';
import './NavBar.css';

export function NavBar() {
  return (
    <Navbar expand="lg" bg="primary"  data-bs-theme="dark" className=''>
      <Container>
        <Navbar.Brand href="#home">
          <Icon width={55} />
          PetitAmor
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto m-3">
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}