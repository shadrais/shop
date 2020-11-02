import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">ShoppieBuzz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/Cart"><i className='fas fa-shopping-cart' /> Cart</Nav.Link>
                            <Nav.Link href="/login"><i className='fas fa-user' /> SignIn</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header
