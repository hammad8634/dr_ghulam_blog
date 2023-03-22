import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";
import img3 from "./images/img3.png";

const About = () => {
  return (
    <div className="about">
      <h2 className="text-center">About</h2> <br />
      <Container>
        <Row>
          <Col className="col-md-4">
            <img src={img3} alt="About" className="img-fluid about_img3" />
          </Col>
          <Col className="col-md-7 right-col">
            <h3>Conventional Surgeries</h3> <br />
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
              abdomenal organs, breast and thyroid gland. abdomenal organs,
              breast and thyroid gland. abdomenal organs, breast and thyroid
              gland. abdomenal organs, breast and thyroid gland.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
