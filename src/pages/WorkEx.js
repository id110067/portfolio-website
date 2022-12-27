import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import facEd from "../assets/fac-education.jpeg";
import msaHku from "../assets/msa-hku.png";
import blossom from "../assets/blossom.jpeg";
import hkuCs from "../assets/hku-cs.png";
import blockchainAtHku from "../assets/blockchain-at-hku.png";
import amplifyMe from "../assets/amplify-me.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function WorkEx() {
  return (
    <>
      {" "}
      <Col className="col-8">
        <Row style={{ marginBottom: "3%", paddingTop: '5%' }}>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            renderArrowsWhenDisabled={true}
            rewind={true}
            rewindWithAnimation={true}
          >
            <Col className="px-3">
              <Card>
                <Card.Body>
                  <Card.Title>
                    <img
                      src={facEd}
                      style={{
                        height: "150px",
                        marginBottom: "3%",
                        borderRadius: "10px",
                        backgroundColor: "white",
                      }}
                    />
                    <h5>
                      <b>Student Research Assistant</b>
                    </h5>
                    <h6>Dec 2022 - Present</h6>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="px-3">
              {" "}
              <Card>
                <Card.Body>
                  <Card.Title>
                    <img
                      src={msaHku}
                      style={{
                        height: "150px",
                        marginBottom: "3%",
                        borderRadius: "10px",
                        backgroundColor: "white",
                      }}
                    />
                    <h5>
                      <b>Chairperson</b>
                    </h5>
                    <h6>June 2022 - Present</h6>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="px-3">
              {" "}
              <Card>
                <Card.Body>
                  <Card.Title>
                    <img
                      src={blossom}
                      style={{
                        height: "150px",
                        marginBottom: "3%",
                        borderRadius: "10px",
                        backgroundColor: "white",
                      }}
                    />
                    <h5>
                      <b>Full Stack Developer</b>
                    </h5>
                    <h6>June 2022 - August 2022</h6>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          <Col className="px-3">
            <Card style={{ height: "250px" }}>
              <Card.Body>
                <Card.Title>
                  <img
                    src={hkuCs}
                    style={{
                      height: "63px",
                      marginBottom: "15%",
                      borderRadius: "10px",
                      backgroundColor: "white",
                      marginTop: "10%",
                    }}
                  />
                  <h5>
                    <b>Student Teaching Assistant</b>
                  </h5>
                  <h6>January 2022 - May 2022</h6>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="px-3">
            {" "}
            <Card>
              <Card.Body>
                <Card.Title>
                  <img
                    src={blockchainAtHku}
                    style={{
                      height: "150px",
                      marginBottom: "3%",
                      borderRadius: "10px",
                      backgroundColor: "white",
                    }}
                  />
                  <h5>
                    <b>Co-Founder</b>
                  </h5>
                  <h6>September 2021 - May 2022</h6>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="px-3">
            {" "}
            <Card>
              <Card.Body>
                <Card.Title>
                  <img
                    src={amplifyMe}
                    style={{
                      height: "150px",
                      marginBottom: "3%",
                      borderRadius: "10px",
                      backgroundColor: "white",
                    }}
                  />
                  <h5>
                    <b>Level 4 Diploma, IBGM</b>
                  </h5>
                  <h6>May 2022</h6>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          </Carousel>
        </Row>
      </Col>
    </>
  );
}

export default WorkEx;
