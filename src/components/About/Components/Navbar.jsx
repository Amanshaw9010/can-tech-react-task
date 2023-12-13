import { Container, Navbar, Nav } from "react-bootstrap";
import "../assets/css/navbar.css";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-bg py-3 overflow-hidden shadow-lg bg-white"
      fixed="top"
    >
      <Container fluid className="mx-lg-5 mx-0">
        <Navbar.Brand to="/">
          <img
            src="images/site-logo.png"
            alt="Logo"
            className="img-fluid"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-2 gap-lg-0 mt-3 mt-lg-0 my-2 my-lg-0">
            <Nav.Link to="/">About Us</Nav.Link>
            <Nav.Link to="about">Resources</Nav.Link>
            <Nav.Link to="portfolio">Success Stories</Nav.Link>
            <Nav.Link to="contact">Webinar</Nav.Link>
            <Nav.Link to="login" key="login" className="loginBtn">
              Apply Now
            </Nav.Link>
            <Nav.Link to="login" key="login" className="loginBtn">
              Career
            </Nav.Link>{" "}
            <Nav.Link to="login" key="login" className="loginBtn">
              Contact Us
            </Nav.Link>
          </Nav>
          <button className="py-2 px-5  fw-bold text-muted rounded">
            Login
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
