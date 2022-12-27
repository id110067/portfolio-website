import React from "react";
import { Col, Button, Card } from "react-bootstrap";
import dpsLogo from "../assets/dps-logo.png";
import hkuLogo from "../assets/hku-logo.png";

function Education() {
  return (
    <>
      <Col className="col-4" style={{ color: "white", paddingTop: "2%" }}>
        <Card
          style={{
            height: "470px",
            backgroundImage:
              "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          <Card.Body>
            <Card.Title>
              <img
                src={dpsLogo}
                style={{
                  height: "150px",
                  marginBottom: "3%",
                  borderRadius: "10px",
                  backgroundColor: "white",
                }}
              />
              <h3>Delhi Public School R K Puram</h3>
            </Card.Title>
            <hr />
            <Card.Text style={{ textAlign: "left" }}>
              <ul>
                <li>
                  All India Senior School Certificate Examination (Science with
                  Computer Science)
                </li>
                <li>Year: 2013 - 2020</li>
                <li>Percentage: 97%</li>
                <li>
                  Gold medal and certificate for portraying academic excellence
                  for 7 consecutive years
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-4" style={{ color: "white", paddingTop: "2%" }}>
        <Card
          style={{
            backgroundImage:
              "linear-gradient(to top, #f43b47 0%, #453a94 100%)",
          }}
        >
          <Card.Body>
            <Card.Title>
              <img
                src={hkuLogo}
                style={{
                  height: "150px",
                  marginBottom: "3%",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              />
              <h3>The University of Hong Kong</h3>
            </Card.Title>
            <hr />
            <Card.Text style={{ textAlign: "left" }}>
              <ul>
                <li>Bachelor of Engineering</li>
                <li>Major: Computer Science; Minor: Finance</li>
                <li>Year: 2020 - 2024</li>
                <li>
                  HKU Foundation Entrance Scholarship – Full tuition scholarship
                  for 4 years.
                </li>
                <li>
                  Activities and societies: Blockchain at HKU; Muslim Students’
                  Association HKU; HKU Social Service Group
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Education;
