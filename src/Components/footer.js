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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet lacus eget sem malesuada pulvinar ut non ex.
            </p>
          </Col>
          <Col md={4}>
            <h5>Categories</h5>
            <ul className="list-unstyled">
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
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@example.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Main St, Anytown USA</li>
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
