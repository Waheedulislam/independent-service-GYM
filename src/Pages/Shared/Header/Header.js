import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
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
                        {
                            user ?
                                <Nav>
                                    <Nav.Link href="#blogs" onClick={handleSignOut}><h6>SignOut</h6></Nav.Link>
                                </Nav>
                                :

                                <Nav.Link as={Link} to="/login">
                                    <h6> Login</h6>
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;