/* eslint-disable jsx-a11y/anchor-is-valid */
import { default as React } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import logo1 from "./images/logo.png";
import Intro from "./intro";
import "./navbar.css";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="white">
      <Container>
        <Navbar.Brand href="#home" className="navbar-container">
          <div className="navbar-left ml-0">
            <a href="/">
              <img src={logo1} alt="Doctor Kit Icon" className="navbar-icon" />
            </a>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="navbar-menus">
            <Nav.Link href="#about" className="menus s-sm mb-1 mt-1 ">
              About
            </Nav.Link>
            <Nav.Link href="#services" className="menus s-sm mb-1 mt-1 ">
              Services
            </Nav.Link>
            <Nav.Link href="#contact_us" className="menus s-sm mb-1 mt-1">
              Contact Us
            </Nav.Link>{" "}
          </Nav>
          <Nav className=" p-2 ">
            <Nav.Link
              href="#"
              className="primary-color-menu s-sm mb-1 mt-1"
            >
              Book Now
            </Nav.Link>
            <Nav.Link
              href="#"
              className="primary-color-menu s-sm  mb-1 mt-1 "
            >
              My Appointment
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function BlogPage() {
  return (
    <div>
      <Navigation />
      <Intro />
    </div>
  );
}

export default BlogPage;
