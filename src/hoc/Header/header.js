import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Navbar, NavDropdown } from "react-bootstrap";
import './header.css';

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className='Navbar' variant="dark">
                <Navbar.Brand href="#home">Morvec</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="#features"><i class="fa fa-user-circle" aria-hidden="true"></i> User</Nav.Link>
                    <Nav.Link href="#pricing">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;