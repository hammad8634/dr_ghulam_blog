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

                <Row className="align-items-left mt-3">
                  <div className="col-8 align-items-center">
                    <br />
                    <hr className="break-line" />
                  </div>
                  <div className="col-6 mt-2 visit-us-div">
                    <img
                      src={locationIcon}
                      className="img-fluid"
                      alt="location"
                    />
                    <b className="ml-2 text-left">Visit Us</b>
                  </div>{" "}
                </Row>
                <Row className="align-items-left mt-1">
                  <div className="col-8">
                    <hr className="break-line " />
                  </div>
                  <div className="col-10 mt-3 appointment-div">
                    <img
                      src={appointmentIcon}
                      className="img-fluid"
                      alt="appointment"
                    />
                    <b className="ml-2 text-left">Make an appointment</b>
                  </div>{" "}
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
