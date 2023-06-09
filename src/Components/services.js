import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "../App.css";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";

const Services = () => {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2 });
  const { ref: refSer1, inView: inViewSer1 } = useInView({ threshold: 0.2 });
  const { ref: refSer2, inView: inViewSer2 } = useInView({ threshold: 0.2 });

  const [shouldAnimateService1, setShouldAnimateService1] = useState(false);
  const [shouldAnimateService2, setShouldAnimateService2] = useState(false);

  useEffect(() => {
    if (inViewSer1) {
      setShouldAnimateService1(true);
    }
  }, [inViewSer1]);

  useEffect(() => {
    if (inViewSer2) {
      setShouldAnimateService2(true);
    }
  }, [inViewSer2]);

  return (
    <section id="services">
      <>
        <h1 className="services_container mt-2 pb-2 ">Services</h1> <br />
      </>
      <div className="">
        <div className="pt-1 pb-0">
          <Container>
            <div className="row">
              <div
                className={`col-md-7 service-1 ${
                  shouldAnimateService1 ? "in-view" : ""
                }`}
                ref={refSer1}
              >
                <div className="pb-2 pl-3">
                  <h4 className="services-headings">Weight Loss Surgery</h4>
                  <p className="weight_loss_p text-left ml-4 ">
                    Dr. Ghulam Siddiq is among the pioneers of Laparoscopic and
                    Bariatric Surgery in Pakistan. He routinely performs
                    Laparascopic Sleeve Gastrectomy, Roux-en-Y Gastric Bypass &
                    mini Gastric Bypass/OAGB. He is a master trainer conducting
                    workshops on Bariatric Surgery throughout Pakistan for the
                    last 8 years.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <img
                  src={img5}
                  alt="About"
                  className="img-fluid services_img3 "
                />{" "}
              </div>
            </div>
          </Container>
        </div>{" "}
        <div className="text-md-center text-danger mt-4" ref={ref1}>
          {inView1 && (
            <h4>
              <CountUp
                start={0}
                duration={3}
                end={503}
                className="fs-2 "
              ></CountUp>
            </h4>
          )}
          <p className="quantity_text pb-4">Bariatric Surgery Procedures</p>
        </div>
        <div className="">
          <Container className="mt-2">
            <div className="row ">
              <div className="col-md-5 ">
                <img
                  src={img6}
                  alt="About"
                  className="img-fluid services_img3 pt-4"
                />{" "}
              </div>{" "}
              <div
                className={`col-md-7 services-2 ${
                  shouldAnimateService2 ? "in-view" : ""
                }`}
                ref={refSer2}
              >
                <div className="service-heading-2">
                  <h3 className=" text-left services-2-heading  ">
                    Conventional Surgeries 2
                  </h3>{" "}
                  <br />
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
        <div className="text-md-center text-primary pt-4" ref={ref2}>
          {inView2 && (
            <h4 className="quantity_values mb-3">
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
