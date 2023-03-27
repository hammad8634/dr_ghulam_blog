/* eslint-disable jsx-a11y/anchor-is-valid */
import { default as React, useState } from "react";
import dropdownIcon from "./images/dropdown.svg";
import logo1 from "./images/logo.svg";
import Intro from "./intro";
import "./navbar.css";

function Navbar() {
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownContact, setDropdownContact] = useState(false);

  const toggleDropdownAbout = () => {
    setDropdownAbout(!dropdownAbout);
  };

  const toggleDropdownContact = () => {
    setDropdownContact(!dropdownContact);
  };

  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img src={logo1} alt="Doctor Kit Icon" className="navbar-icon" />
        </a>
        <a href="/" className="name_tag">
          <div className="navbar-title">Dr. Ghulam Siddiq</div>{" "}
        </a>
      </div>
      <div className="navbar-right">
        <div className="navbar-link-container">
          <div className="navbar-link" onClick={toggleDropdownAbout}>
            About
            <img
              src={dropdownIcon}
              alt="Dropdown Icon"
              className="navbar-dropdown-icon"
            />
            {dropdownAbout && (
              <div className="navbar-dropdown">
                <a
                  href="#about"
                  className="navbar-dropdown-link"
                  onClick={handleScroll}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="navbar-dropdown-link"
                  onClick={handleScroll}
                >
                  Services
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="navbar-link-container">
          <div className="navbar-link" onClick={toggleDropdownContact}>
            Contact
            <img
              src={dropdownIcon}
              alt="Dropdown Icon"
              className="navbar-dropdown-icon"
            />
            {dropdownContact && (
              <div className="navbar-dropdown">
                <a
                  href="#contact_us"
                  className="navbar-dropdown-link"
                  onClick={handleScroll}
                >
                  Contact Us
                </a>
                <a
                  href="#faqs"
                  className="navbar-dropdown-link"
                  onClick={handleScroll}
                >
                  FAQ's
                </a>
              </div>
            )}
          </div>
        </div>
        <a href="#" className="navbar-link blue-text-menu">
          Book Now
        </a>
        <a href="#" className="navbar-link blue-text-menu">
          My Appointment
        </a>
      </div>
    </nav>
  );
}

function BlogPage() {
  return (
    <div>
      <Navbar />
      <Intro />
    </div>
  );
}

export default BlogPage;
