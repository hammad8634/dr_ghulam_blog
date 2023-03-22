import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";
import appointmentIcon from "./images/group.svg";
import img4 from "./images/img4.png";
import locationIcon from "./images/location.svg";
import mapimg from "./images/map.png";

const ContactUs = () => {
  return (
    <div>
      <h2 className="contactUs-heading">Contact</h2>
      <br />
      <div>
        <Container>
          <Row>
            <Col md={6}>
              <img src={img4} className="img-fluid" alt="contactUs-img" />
            </Col>
            <Col md={6}>
              <div>
                <Row>
                  <a href="/">
                    <img src={mapimg} className="img-fluid" alt="map-img" />
                  </a>
                </Row>

                <br />
                <div className="mt-5  col-8 horizontal-line"></div>
                <Row className="ml-5">
                  <Col className="text-left mt-3">
                    <img
                      src={locationIcon}
                      className="img-fluid"
                      alt="location"
                    />
                    <b className="ml-3">Visit Us</b>
                  </Col>{" "}
                </Row>
                <div className="mt-3 col-8 horizontal-line"></div>
                <Row className=" ml-5">
                  <Col className="text-left mt-4">
                    <img
                      src={appointmentIcon}
                      className="img-fluid"
                      alt="appointment"
                    />
                    <b className="ml-4">Make an appointment</b>
                  </Col>{" "}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;
