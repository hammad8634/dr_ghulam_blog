import React, { Fragment } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { default as Faq } from "react-faq-component";
import "../App.css";

const FAQ = () => {
  const data = {
    rows: [
      {
        title: " Lorem ipsum dolor sit amet,",
        content: "Lorem ipsum dolor sit amet, consectetur ",
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
      },
      {
        title: "What is the package version",
        content: "v1.0.5",
      },
    ],
  };
  const styles = {
    bgColor: "#FFFBFF",
    rowTitleColor: "black",
    transitionDuration: "0.4s",
    rowContentPaddingBottom: "20px",
  };

  return (
    <>
      <br />
      <h2 className="faq-heading">Frequently Asked Questions</h2>

      <Container>
        <Col text-left>
          <div className="faq-data">
            <Faq data={data} styles={styles} />{" "}
          </div>
        </Col>
      </Container>
    </>
  );
};

export default FAQ;
