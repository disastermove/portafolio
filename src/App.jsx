import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import Box from "./components/Box";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";

const App = () => {
  const { t } = useTranslation();
  return (
    <Container id="home">
      <Navbar className="mt-3 animate-fade-in-down navs">
        <Nav>
          <Nav.Link className="navbar-links anchor" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="navbar-links" href="#about">
            About
          </Nav.Link>
          <Nav.Link className="navbar-links" href="#projects">
            Projects
          </Nav.Link>
          <Nav.Link className="navbar-links" href="#skills">
            Skills
          </Nav.Link>
        </Nav>
      </Navbar>
      <div className="sec__expernce__tt__circle1 animate-fade-in-down"></div>
      <div className="sec__5__circle1 animate-fade-in-down"></div>
      <div className="sec__5__circle2 animate-fade-in-down"></div>
      <div className="sec__5__circle3 animate-fade-in-down"></div>
      <div className="sec__5__circle4 animate-fade-in-down"></div>
      <div className="sec__5__circle5 animate-fade-in-down"></div>
      <div className="sec__5__circle6 animate-fade-in-down"></div>
      {/* <div className="sec__5__circle7 animate-fade-in-down"></div> */}
      {/* <LanguageSwitcher /> */}
      <Row className="mt-5 align-items-center justify-content-evenly animate-fade-in-down">
        <Col md={4}>
          <div className="description-info">
            <h1>{t("job")}</h1>
            <Image
              src="/imagenes/1662374677059.webp"
              alt=""
              roundedCircle
              className="mb-3"
            />
            <div className="current">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // style="margin:auto;background:0 0;display:block;shape-rendering:auto"
                style={{
                  margin: "auto",
                  background: "0 0",
                  display: "block",
                  shapeRendering: "auto",
                }}
                width="21"
                height="21"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="0"
                  fill="none"
                  stroke="#8aff8a"
                  strokeWidth="28"
                >
                  <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0;29"
                    keyTimes="0;1"
                    keySplines="0 0.2 0.8 1"
                    calcMode="spline"
                    begin="0s"
                  />
                  <animate
                    attributeName="opacity"
                    repeatCount="indefinite"
                    dur="1s"
                    values="1;0"
                    keyTimes="0;1"
                    keySplines="0.2 0 0.8 1"
                    calcMode="spline"
                    begin="0s"
                  />
                </circle>
                <circle
                  cx="50"
                  cy="50"
                  r="0"
                  fill="none"
                  stroke="#8aff8a"
                  strokeWidth="28"
                >
                  <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0;29"
                    keyTimes="0;1"
                    keySplines="0 0.2 0.8 1"
                    calcMode="spline"
                    begin="-0.5s"
                  />
                  <animate
                    attributeName="opacity"
                    repeatCount="indefinite"
                    dur="1s"
                    values="1;0"
                    keyTimes="0;1"
                    keySplines="0.2 0 0.8 1"
                    calcMode="spline"
                    begin="-0.5s"
                  />
                </circle>
              </svg>
              <p>
                Currently working on <b>Portfolio</b>
              </p>
            </div>
          </div>
        </Col>
        <Col md={7} id="about">
          <p>{t("info1")}</p>
          <p>{t("info2")}</p>
          <Button
            className="cv-btn"
            download
            href="/cv_manel.pdf"
            // onClick={() => window.open("/cv_manel.pdf")}
          >
            Descargar CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{ marginLeft: "5px" }}
            >
              <path
                d="M5.256 16A5.33 5.33 0 0 1 3 11.65C3 9.2 4.8 6.937 7.5 6.5 8.347 4.486 10.351 3 12.69 3c2.994 0 5.442 2.323 5.61 5.25 1.59.695 2.7 2.4 2.7 4.247a4.5 4.5 0 0 1-2 3.745M12 21V11m0 10-3-3m3 3 3-3"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </Col>
      </Row>
      <Box />
      <Skills />
      <Footer />
    </Container>
  );
};

export default App;
