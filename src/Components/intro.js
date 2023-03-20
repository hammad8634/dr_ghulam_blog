import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";
import img1 from "./images/img1.jpg";
import milIcon from "./images/mil_icon.svg";

function Intro() {
  const iconData = [
    { text: "32 years of Laparoscopic Experience", icon: milIcon },
    { text: "Shifa International Award", icon: milIcon },
    {
      text: "Recognized for services by the President of Pakistan",
      icon: milIcon,
    },
  ];
  return (
    <Container fluid>
      <div className="main">
        <Row className="align-items-center bg-primary ">
          <Col md={5}>
            <h2 className="text-white text-center text-md-center ">
              Pakistan's Leading Bariatric <br /> & <br /> Laparascopic Surgeon
            </h2>
          </Col>
          <Col md={7} className="text-md-right">
            <img className="img-fluid " src={img1} alt="1" />
          </Col>
        </Row>
      </div>

      <div className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="text-center text-md-center mb-0">
              Professor & Chief of Surgery{" "}
            </h2>
            <p className="shifa-p"> Shifa International Hospital, Islamabad</p>
          </Col>
          <Col className="text-md-left">
            {iconData.map(({ text, icon }) => (
              <Row className="align-items-left mb-3" key={text}>
                <div className="col">
                  <img src={icon} alt={text} className="img-fluid" />
                </div>{" "}
                <div className="col-11 text-left">{text}</div>
              </Row>
            ))}
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Intro;
