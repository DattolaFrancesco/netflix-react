import { Component } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme={"dark"}>
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            <img src="assets/logo.png" style={{ width: "100px", height: "55px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="fw-bold">Home</Nav.Link>
              <Nav.Link href="#t" className="fw-bold">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#m" className="fw-bold">
                Movies
              </Nav.Link>
              <Nav.Link href="#r" className="fw-bold">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#l" className="fw-bold">
                My List
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center text-light">
              <i className="bi bi-search icons me-3"></i>
              <div id="kids" className="fw-bold me-3">
                KIDS
              </div>
              <i className="bi bi-bell icons me-3"></i>
              <i className="bi bi-person-circle icons"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
