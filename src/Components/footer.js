import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";

function BlogFooter() {
  return (
    <footer className="mt-5 py-3 bg-light">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p className="text-left mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet lacus eget sem malesuada pulvinar ut non ex.
            </p>
          </Col>
          <Col md={3}>
            <h5>Categories</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <a href="/" className="categories">
                  Technology
                </a>
              </li>
              <li>
                <a href="/" className="categories">
                  Science
                </a>
              </li>
              <li>
                <a href="/" className="categories">
                  Business
                </a>
              </li>
            </ul>
          </Col>
          <Col md={5}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled text-center mt-3">
              <li>
                <b>Email:</b> info@shifa.com.pk
              </li>
              <li>
                <b>Phone:</b> OPD +92-51-8464646
              </li>
              <li>
                <b>Address:</b> Pitras Bukhari Road, Sector H-8/4, Islamabad -
                Pakistan
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center">
          &copy; 2023 Blog Name. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default BlogFooter;
