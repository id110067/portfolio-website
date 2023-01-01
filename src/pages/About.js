import React from "react";
import { Col, Button, Card, Row } from "react-bootstrap";
import profilePhoto from "../assets/abdur.png";
import $ from "jquery";

function About() {
  var TEXTS = ["iOS", "Android", "Full Stack"];

  var index = 0;

  $(function () {
    setInterval(function () {
      $("#header-text-change").fadeOut(1000, function () {
        $(this).text(TEXTS[index++]).fadeIn(1000);
        if (index === TEXTS.length) index = 0;
      });
    }, 1000);
  });

  return (
    <>
      <Col className="col-8">
        <Card style={{paddingBottom: '3%', backgroundColor: 'rgba(62, 62, 62, 0.8)',}}>
          <Card.Body>
            <Row>
              <Col
                className="col-4"
                style={{ color: "white", paddingTop: "3%" }}
              >
                <img src={profilePhoto} style={{ height: "280px" }} />
              </Col>
              <Col
                className="col-8"
                style={{color: 'white', paddingTop: "4%", paddingLeft: '5%', paddingRight: '5%' }}
              >
                <h1 style={{ fontSize: "2rem", marginBottom: "2%" }}>
                  Mohammad Abdur{" "}
                  <span style={{ color: "#FD8A8A" }}>Rahman</span>
                </h1>
                <h4 style={{ marginBottom: "3%" }}>
                  <span id="header-text-change" style={{ color: "#FD8A8A" }}>
                    Full Stack
                  </span>{" "}
                  Developer
                </h4>
                <hr />
                <h6
                  style={{
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginBottom: "5%",
                  }}
                >
                  <span style={{ color: "#B2B2B2" }}>My name is </span>Mohammad
                  Abdur Rahman
                  <span style={{ color: "#B2B2B2" }}>
                    . I am currently a Junior at The University of Hong Kong,
                    pursuing Bachelor of Engineering, majoring in Computer
                    Science with a minor in Finance. I am passionate about
                    exploring and delving into new ideas to solve problems.
                  </span>{" "}
                </h6>
                <a
                  href="https://www.icloud.com/iclouddrive/0408Eo22kbyC6bo6MncL2Hprg#Resume-MohammadAbdurRahman5"
                  target="_blank"
                >
                  <Button
                    style={{
                      backgroundColor: "#FD8A8A",
                      borderColor: "#FD8A8A",
                      paddingTop: "1%",
                      paddingBottom: "1%",
                    }}
                  >
                    <b>Download Resume</b>
                  </Button>
                </a>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      {/* <Col className="col-3" style={{ color: "white", paddingTop: "3%" }}>
        <img src={profilePhoto} style={{ height: "300px" }} />
      </Col>
      <Col className="col-5" style={{ color: "white", paddingTop: "4%" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "2%" }}>
          Mohammad Abdur <span style={{ color: "#FD8A8A" }}>Rahman</span>
        </h1>
        <h4 style={{ marginBottom: "3%" }}>
          <span id="header-text-change" style={{ color: "#FD8A8A" }}>
            Full Stack
          </span>{" "}
          Developer
        </h4>
        <hr />
        <h6
          style={{
            textAlign: "justify",
            lineHeight: "1.6",
            marginBottom: "5%",
          }}
        >
          <span style={{ color: "#B2B2B2" }}>My name is </span>Mohammad Abdur
          Rahman
          <span style={{ color: "#B2B2B2" }}>
            . I am currently a Junior at The University of Hong Kong, pursuing
            Bachelor of Engineering, majoring in Computer Science with a minor
            in Finance. I am passionate about exploring and delving into new
            ideas to solve problems.
          </span>{" "}
        </h6>
        <a
          href="https://www.icloud.com/iclouddrive/0408Eo22kbyC6bo6MncL2Hprg#Resume-MohammadAbdurRahman5"
          target="_blank"
        >
          <Button
            style={{
              backgroundColor: "#FD8A8A",
              borderColor: "#FD8A8A",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
          >
            <b>Download Resume</b>
          </Button>
        </a>
      </Col> */}
    </>
  );
}

export default About;
