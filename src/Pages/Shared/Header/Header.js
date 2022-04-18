import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar className='custom-bg-color sticky-top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><h2 className='text-color'>BODY FITNESS</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link href="#checkout">CheckOut</Nav.Link>
                        <Nav.Link href="#blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;