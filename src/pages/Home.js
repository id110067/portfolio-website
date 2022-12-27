import React from "react";
import NavBar from "../components/NavBar";
import { Row, Container, Col, Button } from "react-bootstrap";
import SocialMediaBar from "../components/SocialMediaBar";
import BackgroundGif from "../assets/background-gif.gif";
import $ from "jquery";
import { Link } from "react-router-dom";

function Home() {
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
      <Col className="col-8" style={{ color: "white", paddingTop: "7%" }}>
        <h1 style={{ fontSize: "3.5rem", marginBottom: "2%" }}>
          Mohammad Abdur <span style={{ color: "#FD8A8A" }}>Rahman</span>
        </h1>
        <h3 style={{ marginBottom: "3%" }}>
          <span id="header-text-change" style={{ color: "#FD8A8A" }}>
            Full Stack
          </span>{" "}
          Developer
        </h3>
        <Link to='/contact'>
          {" "}
          <Button
            style={{
              backgroundColor: "#FD8A8A",
              borderColor: "#FD8A8A",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
          >
            <b>Get in Touch</b>
          </Button>
        </Link>
      </Col>
    </>
  );
}

export default Home;
