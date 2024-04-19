import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import { Navbar, Nav, Container, Row, Col, Image } from "react-bootstrap";
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
      <div className="sec__5__circle7 animate-fade-in-down"></div>
      <LanguageSwitcher />
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
          </div>
        </Col>
        <Col md={7} id="about">
          <p>{t("info1")}</p>
          <p>{t("info2")}</p>
        </Col>
      </Row>
      <Box />
      <Skills />
      <Footer />
    </Container>
  );
};

export default App;
