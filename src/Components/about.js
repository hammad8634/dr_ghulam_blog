import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";
import img3 from "./images/img3.png";

const About = () => {
  return (
    <div className="about">
      <Container >
        <Row>
          <div className="col-md-6">
            <img src={img3} alt="About" className="img-fluid about_img3" />
          </div>
          <Col className="col-md-6 text-center">
            <br />
            <h2>About</h2> <br />
            <h3>Conventional Surgeries</h3>
            <p className=" text-left">
              Dr. Ghulam Siddiq has a vast experience of conventional operations
              including surgeries thyroid, breast, gastro-intestinal surgeries,
              pancreaticobilliary surgery including whipples operation,
              surgeries for different types of hernias and cancer surgeries of
              abdomenal organs, breast and thyroid gland.
            </p>
            <p className=" text-left">
              Dr. Ghulam Siddiq has a vast experience of conventional operations
              including surgeries thyroid, breast, gastro-intestinal surgeries,
              pancreaticobilliary surgery including whipples operation,
              surgeries for different types of hernias and cancer surgeries of
              abdomenal organs, breast and thyroid gland.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
