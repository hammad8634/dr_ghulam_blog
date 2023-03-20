import React from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "../App.css";
import img3 from "./images/img3.png";
const About = () => {
  return (
    <div className="about">
      <Container>
        <Row>
          <div className="col-md-6">
            <img src={img3} alt="About" className="img-fluid about_img3" />
          </div>
          <div className="col-md-6">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique vel mauris vitae luctus. Morbi pulvinar, dolor vel
              sollicitudin dictum, risus elit hendrerit ex, quis mollis ipsum
              mauris in dolor. In sit amet erat ut massa malesuada commodo eu
              sit amet tellus. Sed ut mi varius, tristique nisl in, viverra
              nisi. Sed ut consectetur nisl. Aliquam erat volutpat.
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default About;
