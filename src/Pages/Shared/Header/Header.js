import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar className='custom-bg-color sticky-top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><h2 className='text-color'>BODY FLEX GYM</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home"><h6>Home</h6></Nav.Link>
                        <Nav.Link href="home#Services">CheckOut</Nav.Link>
                        <Nav>
                            <Nav.Link as={Link} to="/blogs"><h6>Blogs</h6></Nav.Link>
                        </Nav>
                    </Nav>

                    <Nav>
                        <Nav.Link as={Link} to="/about"><h6>About</h6></Nav.Link>
                        <Nav.Link as={Link} to="/login">
                            <h6> Login</h6>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;