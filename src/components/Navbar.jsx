
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Navbar.css';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant='dark' expand="md">
      <Container>

        <Navbar.Brand as={Link} to="/" className='text-uppercase'>John Doe</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto text-uppercase">
            <Nav.Link as={NavLink} to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/services" className={({ isActive }) => (isActive ? 'active' : undefined)}>Services</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" className={({ isActive }) => (isActive ? 'active' : undefined)}>Portfolio</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/mentions-legales" className={({ isActive }) => (isActive ? 'active' : undefined)}>Mentions légales</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;