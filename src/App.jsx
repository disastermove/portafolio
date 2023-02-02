import "./App.css"
import React from 'react';
import Footer from './components/Footer';
import Skills from "./components/Skills";
import { Navbar, Nav, Container, Row, Col, Image, Button } from 'react-bootstrap';
import Box from "./components/Box";

const App = () => {
  return (
    <Container id='home'>
      <Navbar className="mt-3 animate-fade-in-down">
        <Nav>
          <Nav.Link className='navbar-links anchor' href="#home">Home</Nav.Link>
          <Nav.Link className='navbar-links' href="#about">About</Nav.Link>
          <Nav.Link className='navbar-links' href="#projects">Projects</Nav.Link>
          <Nav.Link className='navbar-links' href="#skills">Skills</Nav.Link>
        </Nav>
      </Navbar>
      <Row className='mt-5 align-items-center justify-content-between animate-fade-in-down'>
        <Col md={4}>
          <div className="description-info">
            <h1>FRONT END, WEB AND APP DEVELOPER.</h1>
            <Image src="/imagenes/1662374677059.webp" alt="" roundedCircle className='mb-3' />
          </div>
        </Col>
        <Col md={8} id="about">
          <p>
            Soy Manel, un desarrollador web y movil apasionado en el campo de la
            programación. Tengo habilidades en varios lenguajes de programación,
            como javascript, react y react native, lo que me permite adaptarme
            rápidamente a nuevos proyectos y tecnologías.</p>
          <p>
            Con una mentalidad ágil y
            versátil, me gusta desafiarme a mí mismo y mejorar mis habilidades
            constantemente. Además, estoy comprometido con pasarlo bien en el
            trabajo y enriquecer mi conocimiento en el campo de la tecnología. Estas
            cualidades me convierten en un valioso miembro de cualquier equipo de
            desarrollo y una excelente adición a cualquier proyecto.
          </p>
        </Col>
      </Row>
      <Box />
      <Skills />
      <Footer />
    </Container>
  );
};

export default App