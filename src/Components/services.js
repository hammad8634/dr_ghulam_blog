import React from "react";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "../App.css";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";

const Services = () => {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2 });

  return (
    <section id="services">
      <>
        <br /> <br />
        <h1 className="services_container">Services</h1> <br />
      </>
      <div className="pb-5 pt-3">
        <div className="pt-2 pb-3">
          <Container>
            <div className="row">
              <div className="col-md-6">
                <div className="pb-5 pl-3">
                  <h4 className="services-headings">Weight Loss Surgery</h4>
                  <p className="weight_loss_p text-left">
                    Dr. Ghulam Siddiq is among the pioneers of Laparoscopic and
                    Bariatric Surgery in Pakistan. He routinely performs
                    Laparascopic Sleeve Gastrectomy, Roux-en-Y Gastric Bypass &
                    mini Gastric Bypass/OAGB. He is a master trainer conducting
                    workshops on Bariatric Surgery throughout Pakistan for the
                    last 8 years.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img src={img5} alt="About" className="img-fluid about_img3" />{" "}
              </div>
            </div>
          </Container>
        </div>{" "}
        <div className="text-md-center text-danger" ref={ref1}>
          {inView1 && (
            <CountUp
              start={0}
              duration={3}
              end={503}
              className="fs-2 "
            ></CountUp>
          )}
          <p className="quantity_text">Bariatric Surgery Procedures</p>
        </div>
        <div className="pt-3 pl-5">
          <Container>
            <div className="row ">
              <div className="col-md-6 ">
                <img src={img6} alt="About" className="img-fluid about_img3" />{" "}
              </div>
              <div className="col-md-6">
                <div className="text">
                  <h3 className=" text-left">Conventional Surgeries </h3> <br />
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
          </Container>
        </div>{" "}
        <div className="text-md-center text-primary pt-5" ref={ref2}>
          {inView2 && (
            <h4 className="quantity_values">
              <CountUp
                start={0}
                duration={2}
                end={7765}
                className="fs-2"
              ></CountUp>{" "}
            </h4>
          )}
          <p className="quantity_text">Laparoscopic Cholecystectomies</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
