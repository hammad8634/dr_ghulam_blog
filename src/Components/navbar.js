/* eslint-disable jsx-a11y/anchor-is-valid */
import { default as React, useState } from "react";
import divider from "./images/divider.svg";
import dropdownIcon from "./images/dropdown.svg";
import logo1 from "./images/logo.svg";
import Intro from "./intro";
import "./navbar.css";

function Navbar() {
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownServices, setDropdownServices] = useState(false);

  const toggleDropdownAbout = () => {
    setDropdownAbout(!dropdownAbout);
  };

  const toggleDropdownServices = () => {
    setDropdownServices(!dropdownServices);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#">
          <img src={logo1} alt="Doctor Kit Icon" className="navbar-icon" />
        </a>
        <a href="#" className="name_tag">
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
                <a href="#" className="navbar-dropdown-link">
                  About 1
                </a>
                <a href="#" className="navbar-dropdown-link">
                  About 2
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="navbar-link-container">
          <div className="navbar-link" onClick={toggleDropdownServices}>
            Services
            <img
              src={dropdownIcon}
              alt="Dropdown Icon"
              className="navbar-dropdown-icon"
            />
            {dropdownServices && (
              <div className="navbar-dropdown">
                <a href="#" className="navbar-dropdown-link">
                  Service 1
                </a>
                <a href="#" className="navbar-dropdown-link">
                  Service 2
                </a>
              </div>
            )}
          </div>
        </div>
        <img src={divider} alt="Divider" className="navbar-divider" />
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
