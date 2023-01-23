import React from 'react';
import { Navbar, Nav, Container, Row, Col, Image, Button } from 'react-bootstrap';
import Footer from './Fotter';
import UnderDevelopmentBanner from './UnderDevelopmentBanner';
import "./App.css"

const App = () => {
  return (
    <Container>
      <UnderDevelopmentBanner />
      <Navbar className="mt-3">
        <Nav >
          <Nav.Link className='navbar-links' href="#">Home</Nav.Link>
          <Nav.Link className='navbar-links' href="#">About</Nav.Link>
          <Nav.Link className='navbar-links' href="#">Projects</Nav.Link>
          <Nav.Link className='navbar-links' href="#">Contact</Nav.Link>
        </Nav>
      </Navbar>
      <Row className='mt-5 align-items-center justify-content-between'>
        <Col md={4}>
          <div className="description-info">
            <h1>Manel Ponce</h1>
            <Image src="https://via.placeholder.com/200x200" alt="" roundedCircle />
          </div>
        </Col>
        <Col md={8}>
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
          <Col md={6}>
            <div className="project">
              <Image src="https://via.placeholder.com/300x200" alt="Project 1" rounded />
              <h3>Project 1</h3>
              <p>Project 1 description goes here.</p>
              <Button variant="primary" href="#">
                See project
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="project">
              <Image src="https://via.placeholder.com/300x200" alt="Project 2" rounded />
              <h3>Project 2</h3>
              <p>Project 2 description goes here.</p>
              <Button variant="primary" href="#">
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