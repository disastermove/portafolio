import React from 'react';
import { Navbar, Nav, Container, Row, Col, Image, Button } from 'react-bootstrap';
import Footer from './Fotter';
import UnderDevelopmentBanner from './UnderDevelopmentBanner';
import "./App.css"

const App = () => {
  return (
    <Container id='home'>
      <UnderDevelopmentBanner />
      <Navbar className="mt-3">
        <Nav >
          <Nav.Link className='navbar-links' href="#home">Home</Nav.Link>
          <Nav.Link className='navbar-links' href="#about">About</Nav.Link>
          <Nav.Link className='navbar-links' href="#projects">Projects</Nav.Link>
          {/* <Nav.Link className='navbar-links' href="#">Contact</Nav.Link> */}
        </Nav>
      </Navbar>
      <Row className='mt-5 align-items-center justify-content-between'>
        <Col md={4}>
          <div className="description-info">
            <h1>Manel Ponce</h1>
            <Image src="/1662374677059.webp" alt="" roundedCircle className='mb-3' />
          </div>
        </Col>
        <Col md={8} id="about">
          <p>
            Soy Manel, un desarrollador web y movil apasionado en el campo de la
            programación. Tengo habilidades en varios lenguajes de programación,
            como javascript, react y react native, lo que me permite adaptarme
            rápidamente a nuevos proyectos y tecnologías.
            <br />
            <br />
            Con una mentalidad ágil y
            versátil, me gusta desafiarme a mí mismo y mejorar mis habilidades
            constantemente. Además, estoy comprometido con pasarlo bien en el
            trabajo y enriquecer mi conocimiento en el campo de la tecnología. Estas
            cualidades me convierten en un valioso miembro de cualquier equipo de
            desarrollo y una excelente adición a cualquier proyecto.
          </p>
        </Col>
      </Row>
      <section id="projects">
        <h2>Projects</h2>
        <Row>
          <Col md={6} className="d-flex justify-content-center align-items-flex-start">
            <div className="project">
              <Image src="/unnamed.webp" alt="Project 1" rounded width={"300px"} height="200px" className='image' />
              <h3>Rankedly App</h3>
              <p>Aplicacion que permite crear, administrar unirte a torneos esports hecha con react native </p>
              <Button variant="primary" href="https://play.google.com/store/apps/details?id=com.themanelpj.vitalapp">
                See project
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="project">
              <Image src="/rickandmorty.webp" alt="Project 2" rounded className='image' />
              <h3>Rick and Morty API</h3>
              <p>Esto es un proyecto hecho con la api de rick and morty con react</p>
              <Button variant="primary" href="https://rickandmortyapis.netlify.app/">
                See project
              </Button>
            </div>
          </Col>
        </Row>
      </section>
      <Footer />
    </Container>
  );
};

export default App