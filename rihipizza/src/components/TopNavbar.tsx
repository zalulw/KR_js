import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { GiFullPizza } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";

function TopNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaPizzaSlice />
          PizzaPizza
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/pizzak">
              Pizzák
            </Nav.Link>
            <Nav.Link as={Link} to="/new-pizza">
              Új pizza
            </Nav.Link>
            <NavDropdown title="Edit" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/edit-pizza/1">
                Szerkeztés
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/cart">
              Kosár
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Bejelentkezés
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
