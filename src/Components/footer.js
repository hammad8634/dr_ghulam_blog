/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../App.css";

const BlogFooter = () => {
  return (
    <div className="footer-main-container">
      <footer className=" text-black py-5 footer-container">
        <Container className="justify-content-center">
          <Row>
            <Col md={4}>
              <h4>Shifa</h4>
              <p className="fs-6 ">
                We are creating High Quality Resources and tools to Aid
                developers during the development of their projects.
              </p>
            </Col>
            <Row className="d-md-none">
              <Col xs={6}>
                <h4>Doctor</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="footer-list">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-list">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-list">
                      Contact
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={6}>
                <h4>Help</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="footer-list">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-list">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-list">
                      Sign In
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Col md={4} className="d-none d-md-block">
              <h4>Doctor</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="footer-list">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-list">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-list">
                    Contact
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={4} className="d-none d-md-block">
              <h4>Help</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="footer-list">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-list">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-list">
                    Sign In
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="d-flex justify-content-center">
          <Row className="mt-1">
            <Col md={8} className="">
              <p className="fs-6 mt-3 ">
                &copy; Shifa, 2023. All rights reserved.
              </p>
            </Col>
            <Col
              md={4}
              className="d-flex justify-content-center footer-icon-div"
            >
              <a href="#" className=" footer-icon">
                <FaFacebook size={25} />
              </a>
              <a href="#" className="footer-icon">
                <FaInstagram size={25} />
              </a>
              <a href="#" className=" footer-icon">
                <FaTwitter size={25} />
              </a>
            </Col>
          </Row>
        </div>
      </footer>
    </div>
  );
};

export default BlogFooter;
