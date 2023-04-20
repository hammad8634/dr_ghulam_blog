import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";
import Awards from "./awards";
import img1 from "./images/img1.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#FFDADA",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  text: {
    color: "black",
    // fontWeight: "bold",
    textShadow: "1px 1px 1px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    padding: "70px 0px 70px 0px",
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
}));
function Intro() {
  const classes = useStyles();

  return (
    <>
      {" "}
      <Container fluid className="intro-main-container">
        <Grid container>
          {/* Left column */}
          <Grid item xs={12} sm={6}>
            <div className={classes.container}>
              <Typography
                variant="h5"
                className={`${classes.text} animate-text`}
              >
                Pakistan's Leading Bariatric <br /> & <br /> Laparascopic
                Surgeon
              </Typography>
            </div>
          </Grid>

          {/* Right column */}
          <Grid item xs={12} sm={6}>
            <img src={img1} className={classes.img} alt="Responsive" />
          </Grid>
        </Grid>

        <div className="py-5 intro-container-2" id="my-div">
          <Row className="align-items-center">
            <Col md={6} className="intro-text">
              <div className="text-container-intro">
                <h2 className="text-center text-md-center mb-0 text-before-award">
                  Professor & Chief of Surgery{" "}
                </h2>
                <p className="shifa-p">
                  {" "}
                  Shifa International Hospital, Islamabad
                </p>
              </div>
            </Col>
            <Col>
              {" "}
              <Awards />
            </Col>{" "}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Intro;
