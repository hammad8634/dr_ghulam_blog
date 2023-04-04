import React from "react";
// import { Row } from "react-bootstrap";
// import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";
import img3 from "./images/img3.png";

const About = () => {
  return (
    <div className="about">
      <section id="about">
        {" "}
        <br /> <br />
        <h1 className="text-center">About</h1> <br />
        <br />
        <Container>
          <div className="row">
            <div className="col-md-5 about-main-img">
              <img src={img3} alt="About" className="img-fluid about_img3 " />{" "}
            </div>
            <div className="col-md-7">
              <div className="text">
                {" "}
                <br />
                <h3 className=" about-heading">Conventional Surgeries</h3>{" "}
                <br />
                <div className="about-para ">
                  <p className=" text-left ">
                    Dr. Ghulam Siddiq has a vast experience of conventional
                    operations including surgeries thyroid, breast,
                    gastro-intestinal surgeries, pancreaticobilliary surgery
                    including whipples operation, surgeries for different types
                    of hernias and cancer surgeries of abdomenal organs, breast
                    and thyroid gland.
                  </p>
                  <p className=" text-left">
                    Dr. Ghulam Siddiq has a vast experience of conventional
                    operations including surgeries thyroid, breast,
                    gastro-intestinal surgeries, pancreaticobilliary surgery
                    including whipples operation, surgeries for different types
                    of hernias and cancer surgeries of abdomenal organs, breast
                    and thyroid gland.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
