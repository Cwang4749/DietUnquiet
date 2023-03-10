import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/Logo11.png";

function WelcomeNav(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Diet Unquiet</Navbar.Brand>
        </LinkContainer>
        <img className="WelcomeLogo" src={logo} />

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/About">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <Nav.Link target="_blank" href="https://vast-teal-ostrich-ring.cyclic.app/">
              API
            </Nav.Link>
          </Nav>
          <Nav>
            <LinkContainer to="/LoginPage">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/CreateAccount">
              <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WelcomeNav;
