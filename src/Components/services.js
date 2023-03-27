import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";

const Services = () => {
  return (
    <section id="services">
      <>
        <br />
        <h1 className="services_container">Services</h1> <br />
        <Container>
          <Row>
            <Col md={6} className="text-left">
              <div className="pb-5 pl-3">
                <h4 className="services-headings">Weight Loss Surgery</h4>
                <p>
                  Dr. Ghulam Siddiq is among the pioneers of Laparoscopic and
                  Bariatric Surgery in Pakistan. He routinely performs
                  Laparascopic Sleeve Gastrectomy, Roux-en-Y Gastric Bypass &
                  mini Gastric Bypass/OAGB. He is a master trainer conducting
                  workshops on Bariatric Surgery throughout Pakistan for the
                  last 8 years.
                </p>
              </div>
            </Col>

            <Col md={6}>
              <div className="text-md-center  text-danger">
                <h4 className="quantity_values">803</h4>
                <p className="quantity_text">Bariatric Surgery Procedures</p>
              </div>
              <br />
              <div className="text-md-center text-primary">
                <h4 className="quantity_values">7765</h4>
                <p className="quantity_text">Laparoscopic Cholecystectomies </p>
              </div>
            </Col>
          </Row>
        </Container>
      </>

      <>
        <Container>
          <div className="section-two">
            <Row>
              <Col md={6} className="text-left">
                <div className="pb-3 pl-3 ">
                  <h4 className="services-headings">
                    Advanced Laparoscopic Surgery
                  </h4>
                  <p>
                    Apart from Weight Loss Surgery, his other areas of interest
                    are Laparascopic Surgery for Haitus Hernia,
                    Gastro-intestinal cancer, Splenectomy, Adrenalectomy,
                    Laparoscopic Repair of Hernias, Exploration of Common Bile
                    Duct.
                  </p>
                </div>
                <div className="pb-3 pl-3">
                  <h4 className="services-headings">
                    Laparoscopic Cholecystectomy
                  </h4>

                  <p>
                    Out of my Laparoscopic work, the main bulk is that of
                    Bariatric Surgery (weight loss surgery) and Laparoscopic
                    Cholystectomies which include Laparoscopic Exploration of
                    Common Bile Duct.
                  </p>
                </div>
                <div className="pb-1 pl-3">
                  <h4 className="services-headings">
                    Laparoscopic Cholecyst 2
                  </h4>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse fringilla mauris non risus ullamcorper, non
                    pulvinar ipsum semper.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <img
                    src={img5}
                    alt="Image1"
                    className="img-fluid services_img mt-1"
                  />
                </div>
                <br />
                <div>
                  <img
                    src={img6}
                    alt="Image2"
                    className="img-fluid services_img"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    </section>
  );
};

export default Services;
