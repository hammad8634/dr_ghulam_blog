import { faAward, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "../App.css";

const Awards = () => {
  const awardData = [
    { text: "32 years of Laparoscopic Experience", icon: faAward },
    { text: "Shifa International Award", icon: faTrophy },
    {
      text: "Recognized  by the President of Pakistan",
      icon: faStar,
    },
  ];

  return (
    <div className="awards-container">
      {awardData.map(({ text, icon }) => (
          <Row className="awards-icon-container " key={text}>
            <Col sm={4} className="icon-container">
              <FontAwesomeIcon icon={icon} className="icon" />
            </Col>
            <Col>
              {" "}
              <h3 className="award-name text-left">{text}</h3>
            </Col>
          </Row>
      ))}
    </div>
  );
};

export default Awards;
