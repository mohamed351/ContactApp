import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Contact App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav > <Link className="nav-link" to="/"> Contact</Link>  </Nav>
                    <Nav> <Link className="nav-link" to="/create"> Create New Contact</Link> </Nav>

                </Nav>
            </Container>
        </Navbar>
    )

}