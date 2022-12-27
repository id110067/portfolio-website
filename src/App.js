import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavBar from "./components/NavBar";
import SocialMediaBar from "./components/SocialMediaBar";
import BackgroundGif from "./assets/background-gif.gif";
import $ from "jquery";
// import AppRoute from './AppRoute';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import About from "./pages/About";
import Home from "./pages/Home";
import WorkEx from "./pages/WorkEx";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Container fluid style={{ height: "100vh", backgroundColor: "black" }}>
        <Row>
          <NavBar />
        </Row>
        <Row style={{ paddingTop: "5%", zIndex: "100" }}>
          <Col
            className="col-2"
            style={{ paddingTop: "5%", paddingRight: "3%" }}
          >
            <SocialMediaBar />
          </Col>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<Education />} />
              <Route path="/about" element={<About />} />
              <Route path="/workex" element={<WorkEx />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
          <Col className="col-2"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
