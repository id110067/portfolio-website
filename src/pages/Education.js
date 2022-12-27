import React, { useState } from "react";
import { Col, Button, Card } from "react-bootstrap";
import dpsLogo from "../assets/dps-logo.png";
import hkuLogo from "../assets/hku-logo.png";

function Education() {
  const [styleButton1, setStyleButton1] = useState({ display: "none" });
  const [styleBackground1, setStyleBackground1] = useState({
    height: "470px",
    background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
  });
  const [styleImage1, setStyleImage1] = useState({
    height: "150px",
    marginBottom: "3%",
    borderRadius: "10px",
    backgroundColor: "white",
  });
  const [styleButton2, setStyleButton2] = useState({ display: "none" });
  const [styleBackground2, setStyleBackground2] = useState({
    backgroundImage: "linear-gradient(to top, #f43b47 0%, #453a94 100%)",
  });
  const [styleImage2, setStyleImage2] = useState({
    height: "150px",
    marginBottom: "3%",
    borderRadius: "10px",
    backgroundColor: "white",
  });

  return (
    <>
      <Col className="col-4" style={{ color: "white", paddingTop: "2%" }}>
        <Card
          style={styleBackground1}
          onMouseEnter={(e) => {
            setStyleButton1({
              display: "block",
              margin: "auto",
              backgroundImage:
                "linear-gradient(to right, #16A085 0%, #F4D03F  51%, #16A085  100%)",
              textAlign: "center",
              textTransform: "uppercase",
              transition: "0.5s",
              backgroundSize: "200% auto",
              color: "white",
              boxShadow: "0 0 20px #eee",
              borderRadius: "10px",
            });
            setStyleBackground1({
              height: "470px",
              backgroundImage:
                "linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)",
              boxShadow: "0 0 20px 0 rgba(0,0,0,0.5)",
            });
            setStyleImage1({
              height: "150px",
              marginBottom: "3%",
              borderRadius: "10px",
              backgroundColor: "white",
              boxShadow: "0 0 20px 0 rgba(0,0,0,0.5)",
              transform: "scale(1.5)",
              transition: "0.5s all ease-in-out",
            });
          }}
          onMouseLeave={(e) => {
            setStyleButton1({ display: "none" });
            setStyleBackground1({
              height: "470px",
              backgroundImage:
                "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
            });
            setStyleImage1({
              height: "150px",
              marginBottom: "3%",
              borderRadius: "10px",
              backgroundColor: "white",
              transition: "0.5s all ease-in-out",
            });
          }}
        >
          <Card.Body>
            <Card.Title>
              <img src={dpsLogo} style={styleImage1} />
              <h3>Delhi Public School R K Puram</h3>
            </Card.Title>
            <hr />
            <a
              href="https://dpsrkp.net/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                style={styleButton1}
                onMouseEnter={(e) => {
                  setStyleButton1({
                    backgroundPosition: "right center",
                    color: "#fff",
                    textDecoration: "none",
                    display: "block",
                    margin: "auto",
                    backgroundImage:
                      "linear-gradient(to right, #16A085 0%, #F4D03F  51%, #16A085  100%)",
                    textAlign: "center",
                    textTransform: "uppercase",
                    transition: "0.5s",
                    backgroundSize: "200% auto",
                    color: "white",
                    boxShadow: "0 0 20px #eee",
                    borderRadius: "10px",
                    transform: "scale(1.2)",
                  });
                }}
                onMouseLeave={(e) => {
                  setStyleButton1({
                    display: "block",
                    margin: "auto",
                    backgroundImage:
                      "linear-gradient(to right, #16A085 0%, #F4D03F  51%, #16A085  100%)",
                    textAlign: "center",
                    textTransform: "uppercase",
                    transition: "0.5s",
                    backgroundSize: "200% auto",
                    color: "white",
                    boxShadow: "0 0 20px #eee",
                    borderRadius: "10px",
                  });
                }}
              >
                <b>Visit My School!</b>
              </Button>
            </a>
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
          style={styleBackground2}
          onMouseEnter={(e) => {
            setStyleButton2({
              display: "block",
              margin: "auto",
              backgroundImage:
                "linear-gradient(to right, #1D2B64 0%, #F8CDDA  51%, #1D2B64  100%)",
              textAlign: "center",
              textTransform: "uppercase",
              transition: "0.5s",
              backgroundSize: "200% auto",
              color: "white",
              boxShadow: "0 0 20px #eee",
              borderRadius: "10px",
            });
            setStyleBackground2({
              height: "470px",
              backgroundImage:
                "linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)",
              boxShadow: "0 0 20px 0 rgba(0,0,0,0.5)",
            });
            setStyleImage2({
              height: "150px",
              marginBottom: "3%",
              borderRadius: "10px",
              backgroundColor: "white",
              boxShadow: "0 0 20px 0 rgba(0,0,0,0.5)",
              transform: "scale(1.5)",
              transition: "0.5s all ease-in-out",
            });
          }}
          onMouseLeave={(e) => {
            setStyleButton2({ display: "none" });
            setStyleBackground2({
              height: "470px",
              backgroundImage:
                "linear-gradient(to top, #f43b47 0%, #453a94 100%)",
            });
            setStyleImage2({
              height: "150px",
              marginBottom: "3%",
              borderRadius: "10px",
              backgroundColor: "white",
              transition: "0.5s all ease-in-out",
            });
          }}
        >
          <Card.Body>
            <Card.Title>
              <img src={hkuLogo} style={styleImage2} />
              <h3>The University of Hong Kong</h3>
            </Card.Title>
            <hr />
            <a
              href="https://www.hku.hk/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                style={styleButton2}
                onMouseEnter={(e) => {
                  setStyleButton2({
                    backgroundPosition: "right center",
                    color: "#fff",
                    textDecoration: "none",
                    display: "block",
                    margin: "auto",
                    backgroundImage:
                      "linear-gradient(to right, #1D2B64 0%, #F8CDDA  51%, #1D2B64  100%)",
                    textAlign: "center",
                    textTransform: "uppercase",
                    transition: "0.5s",
                    backgroundSize: "200% auto",
                    color: "white",
                    boxShadow: "0 0 20px #eee",
                    borderRadius: "10px",
                    transform: "scale(1.2)",
                  });
                }}
                onMouseLeave={(e) => {
                  setStyleButton2({
                    display: "block",
                    margin: "auto",
                    backgroundImage:
                      "linear-gradient(to right, #1D2B64 0%, #F8CDDA  51%, #1D2B64  100%)",
                    textAlign: "center",
                    textTransform: "uppercase",
                    transition: "0.5s",
                    backgroundSize: "200% auto",
                    color: "white",
                    boxShadow: "0 0 20px #eee",
                    borderRadius: "10px",
                  });
                }}
              >
                <b>Visit My University!</b>
              </Button>
            </a>
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

// .btn-grad {
//   background-image: linear-gradient(to right, #1D2B64 0%, #F8CDDA  51%, #1D2B64  100%);
//   margin: 10px;
//   padding: 15px 45px;
//   text-align: center;
//   text-transform: uppercase;
//   transition: 0.5s;
//   background-size: 200% auto;
//   color: white;
//   box-shadow: 0 0 20px #eee;
//   border-radius: 10px;
//   display: block;
// }

// .btn-grad:hover {
//   background-position: right center; /* change the direction of the change here */
//   color: #fff;
//   text-decoration: none;
// }
