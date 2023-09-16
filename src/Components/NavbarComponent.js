import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';

import style from './NavbarComponent.module.css'

export class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" bg="dark" variant="dark" className="d-flex justify-content-center">
                    <Container fluid>
                        <Navbar.Brand href="#">StackSoftware</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav 
                                className="mx-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link className={style.mynav} href="#home">Home</Nav.Link>
                                <Nav.Link className={style.mynav}  href="#link">About</Nav.Link>

                                <Nav.Link className={style.mynav}  href="#link">Services</Nav.Link>
                               

                                <Nav.Link className={style.mynav}  href="#link">Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavbarComponent;
