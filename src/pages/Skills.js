import React from "react";
import { Col, Button, Row } from "react-bootstrap";
import {
  FaPython,
  FaCuttlefish,
  FaJava,
  FaSwift,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGit,
  FaAndroid,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiKotlin,
  SiReact,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiHeroku,
  SiIos,
  SiRedux,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import "./Buttons.css";

function Skills() {
  return (
    <>
      <Col className="col-8" style={{ color: "#B2B2B2" }}>
        <Row style={{ marginBottom: "3%" }}>
          <Col className="col-6" style={{}}>
            <h3 style={{ marginBottom: "5%" }}>
              Programming <span style={{ color: "#FD8A8A" }}>Languages</span>
            </h3>
            <Button
              variant="outline-primary mx-2 my-2"
              style={{ fontWeight: "bold" }}
            >
              <FaPython /> Python
            </Button>{" "}
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-java"
              style={{ fontWeight: "bold" }}
            >
              <FaJava /> Java
            </Button>{" "}
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-c"
              style={{ fontWeight: "bold" }}
            >
              <FaCuttlefish /> C/C++
            </Button>{" "}
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-javascript"
              style={{ fontWeight: "bold" }}
            >
              <IoLogoJavascript /> JavaScript
            </Button>{" "}
          </Col>
          <Col className="col-6">
            <h3 style={{ marginBottom: "5%" }}>
              Web Development{" "}
              <span style={{ color: "#FD8A8A" }}>Technologies</span>
            </h3>
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-html"
              style={{ fontWeight: "bold" }}
            >
              <FaHtml5 /> HTML5
            </Button>{" "}
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-css"
              style={{ fontWeight: "bold" }}
            >
              <DiCss3 /> CSS3
            </Button>{" "}
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-react"
              style={{ fontWeight: "bold" }}
            >
              <FaReact /> ReactJS
            </Button>{" "}
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-node"
              style={{ fontWeight: "bold" }}
            >
              <FaNodeJs /> NodeJS
            </Button>{" "}
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-express"
              style={{ fontWeight: "bold" }}
            >
              <SiExpress /> ExpressJS
            </Button>{" "}
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-bootstrap"
              style={{ fontWeight: "bold" }}
            >
              <FaBootstrap /> Bootstrap
            </Button>{" "}
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-redux"
              style={{ fontWeight: "bold" }}
            >
              <SiRedux /> Redux
            </Button>{" "}
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-heroku"
              style={{ fontWeight: "bold" }}
            >
              <SiHeroku /> Heroku
            </Button>{" "}
          </Col>
        </Row>
        <Row>
          <Col className="col-6">
            <h3 style={{ marginBottom: "5%" }}>
              Mobile App <span style={{ color: "#FD8A8A" }}>Technologies</span>
            </h3>
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-swift"
              style={{ fontWeight: "bold" }}
            >
              <FaSwift /> Swift5
            </Button>{" "}
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-kotlin"
              style={{ fontWeight: "bold" }}
            >
              <SiKotlin /> Kotlin
            </Button>{" "}
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-react-native"
              style={{ fontWeight: "bold" }}
            >
              <SiReact /> React Native
            </Button>{" "}
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-android"
              style={{ fontWeight: "bold" }}
            >
              <FaAndroid /> Android
            </Button>{" "}
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-ios"
              style={{ fontWeight: "bold" }}
            >
              <SiIos /> iOS
            </Button>{" "}
          </Col>
          <Col className="col-6">
            <h3 style={{ marginBottom: "5%" }}>
              Database <span style={{ color: "#FD8A8A" }}>Technologies</span>
            </h3>
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-mongodb"
              style={{ fontWeight: "bold" }}
            >
              <SiMongodb /> MongoDB
            </Button>{" "}
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-mysql"
              style={{ fontWeight: "bold" }}
            >
              <SiMysql /> MySQL
            </Button>{" "}
            <Button
              variant="outline-primary mx-2 my-2"
              className="btn-firebase"
              style={{ fontWeight: "bold" }}
            >
              <SiFirebase /> Firebase
            </Button>{" "}
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default Skills;
