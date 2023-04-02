/* eslint-disable jsx-a11y/anchor-is-valid */
import { default as React } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import logo1 from "./images/logo.svg";
import Intro from "./intro";
import "./navbar.css";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="white">
      <Container>
        <Navbar.Brand href="#home">
          <div className="navbar-left">
            <a href="/">
              <img src={logo1} alt="Doctor Kit Icon" className="navbar-icon" />
            </a>
            <a href="/" className="name_tag">
              <div className="navbar-title ">Dr. Ghulam Siddiq</div>{" "}
            </a>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="">
            <Nav.Link href="/" className="menus shadow-sm mb-3 mt-2 ">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="menus shadow-sm mb-3 mt-2">
              About
            </Nav.Link>
            <Nav.Link href="#services" className="menus shadow-sm mb-3 mt-2">
              Services
            </Nav.Link>
            <Nav.Link href="#contact_us" className="menus shadow-sm mb-3 mt-2">
              Contact Us
            </Nav.Link>{" "}
            <Nav.Link href="#faqs" className="menus shadow-sm mb-3 mt-2 ">
              FAQs
            </Nav.Link>
          </Nav>
          <Nav className=" p-2 fw-bold">
            <Nav.Link
              href="#"
              className="primary-color-menu shadow-sm mb-3 mt-2"
            >
              Book Now
            </Nav.Link>
            <Nav.Link
              href="#"
              className="primary-color-menu shadow-sm  mb-3 mt-2 "
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
