import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";
import appointmentIcon from "./images/group_img.svg";
import img4 from "./images/img4.png";
import locationIcon from "./images/location.svg";
import map_img from "./images/map.png";

const ContactUs = ({ location }) => {
  const handleClick = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${location}`;
    window.open(mapUrl, "_blank");
  };
  return (
    <section id="contact_us">
      {" "}
      <br />
      <h1 className="contactUs-heading">Contact</h1>
      <br />
      <div>
        <Container>
          <Row className="contactus-row">
            <Col md={6}>
              <img src={img4} className="img-fluid" alt="contactUs-img" />
            </Col>
            <Col md={6}>
              <div>
                <div className="mt-3 col-md-10 col-lg-11  horizontal-line"></div>
                <Row className="ml-5 contactus-text">
                  <Col className="text-left mt-3">
                    <img
                      src={locationIcon}
                      className="img-fluid"
                      alt="location"
                    />
                    <b className="ml-3">Visit Us</b>
                  </Col>{" "}
                </Row>
                <div className="mt-3 col-md-10 col-lg-11  horizontal-line"></div>
                <Row className=" ml-5 contactus-text">
                  <Col className="text-left mt-4">
                    <img
                      src={appointmentIcon}
                      className="img-fluid appointment-icon"
                      alt="appointment"
                    />
                    <b className="ml-4">Make an appointment</b>
                  </Col>{" "}
                </Row>{" "}
                <div className="mt-3 col-md-10 col-lg-11  horizontal-line"></div>
                <Row>
                  <a href="#contact_us" onClick={handleClick}>
                    <br />
                    <img src={map_img} className="img-fluid" alt="map-img" />
                  </a>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ContactUs;
