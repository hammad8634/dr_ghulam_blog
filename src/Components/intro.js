import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";
import Awards from "./awards";
import img1 from "./images/img1.jpg";

function Intro() {
  // eslint-disable-next-line no-unused-vars
  return (
    <Container fluid className="intro-main-container">
      <div className="intro-container">
        <Row>
          <Col md={5} className="bg-primary ">
            <h2 className="text-white text-center text-md-center pt-5 pb-5 ">
              Pakistan's Leading Bariatric <br /> & <br /> Laparascopic Surgeon
            </h2>
          </Col>
          <Col md={7} className="intro-img-div-container">
            <img className="img-fluid intro-img" src={img1} alt="1" />
          </Col>
        </Row>
      </div>

      <div className="py-5 intro-container-2">
        <Row className="align-items-center">
          <Col md={6} className="intro-text">
            <div className="text-container-intro">
              <h2 className="text-center text-md-center mb-0">
                Professor & Chief of Surgery{" "}
              </h2>
              <p className="shifa-p">
                {" "}
                Shifa International Hospital, Islamabad
              </p>
            </div>
          </Col>
          <Col>
            {" "}
            <Awards />
          </Col>{" "}
        </Row>
      </div>
    </Container>
  );
}

export default Intro;
