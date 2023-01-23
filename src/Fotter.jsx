import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={4}>
                        <h3>Contact</h3>
                        <ListGroup>
                            <ListGroupItem>Email: manelponce@example.com</ListGroupItem>
                            <ListGroupItem>Phone: 555-555-5555</ListGroupItem>

                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <h3>Links</h3>
                        <ListGroup>
                            <ListGroupItem>
                                <a href="#">Home</a>
                            </ListGroupItem>
                            <ListGroupItem>
                                <a href="#">About</a>
                            </ListGroupItem>
                            <ListGroupItem>
                                <a href="#">Projects</a>
                            </ListGroupItem>
                            <ListGroupItem>
                                <a href="#">Contact</a>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <h3>Social</h3>
                        <ListGroup>
                            <ListGroupItem>
                                <a href="#">
                                    <FontAwesomeIcon icon={faGithub} /> GitHub
                                </a>
                            </ListGroupItem>
                            <ListGroupItem>
                                <a href="#">
                                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                                </a>
                            </ListGroupItem>
                            <ListGroupItem>
                                <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                                </a>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="text-center">Copyright © 2022 Manel Ponce</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
