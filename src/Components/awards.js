import { faAward, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useInView } from "react-intersection-observer";
import "../App.css";

const Awards = () => {
  const { ref: refAward, inView: inViewAward } = useInView({ threshold: 0.2 });
  const [shouldAnimateAward, setShouldAnimateAward] = useState(false);

  useEffect(() => {
    if (inViewAward) {
      setShouldAnimateAward(true);
    }
  }, [inViewAward]);

  const awardData = [
    { text: "32 years of Laparoscopic Experience", icon: faAward },
    { text: "Shifa International Award", icon: faTrophy },
    {
      text: "Recognized  by the President of Pakistan",
      icon: faStar,
    },
  ];

  return (
    <div
      className={`awards-container ${shouldAnimateAward ? "in-view" : ""}`}
      ref={refAward}
    >
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
