import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
        <footer className='animate-fade-in-down'>
            <Container>
                <Row className='d-flex justify-content-center mb-5'>

                    <Col md={4}>
                        <h3>Links</h3>
                        <ListGroup>
                            <ListGroupItem className='list-group'>
                                <a className='anchor' href="#home">Home</a>
                            </ListGroupItem>
                            <ListGroupItem className='list-group'>
                                <a className='anchor' href="#about">About</a>
                            </ListGroupItem>
                            <ListGroupItem className='list-group'>
                                <a className='anchor' href="#projects">Projects</a>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <h3>Social</h3>
                        <ListGroup >
                            <ListGroupItem className='list-group'>Email: manelponcejesus@gmail.com</ListGroupItem>
                            <ListGroupItem className='list-group'>
                                <a className='anchor' href="https://github.com/disastermove">
                                    <FontAwesomeIcon icon={faGithub} /> GitHub
                                </a>
                            </ListGroupItem>
                            <ListGroupItem className='list-group'>
                                <a className='anchor' href="https://www.linkedin.com/in/manel-ponce-a49a0023a/">
                                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                                </a>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="text-center">Copyright © 2023 Manel Ponce</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
