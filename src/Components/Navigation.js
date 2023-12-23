import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {

        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <div>logo here</div>
                    <Navbar.Brand href="#home">Bari-transform</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#my-mission">My Mission</Nav.Link>
                            <Nav.Link href="#my-services">My Services</Nav.Link>
                            <Nav.Link href="#faq">FAQ</Nav.Link>
                            <Nav.Link href="#login">Members Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );

};

export default Navigation;