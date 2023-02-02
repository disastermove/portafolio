import { Container, Row, Col, Image } from 'react-bootstrap';

const Skills = () => {
    return (
        <section id="skills" className='mb-5 mt-5 animate-fade-in-down'>
            <h2 className='text-center'>My Skills</h2>
            <Container className='grids'>
                <Row className='rower'>
                    <Col xs={2} >
                        <div className="skill-box">
                            <Image src="/iconos/html.webp" alt="HTML" fluid />
                            <p style={{ marginTop: 10 }}>HTML</p>
                        </div>
                    </Col>
                    <Col xs={2} >
                        <div className="skill-box">
                            <Image src="/iconos/css.webp" alt="CSS" fluid />
                            <p style={{ marginTop: 10 }}>CSS</p>
                        </div>
                    </Col>
                    <Col xs={2} >
                        <div className="skill-box">
                            <Image src="/iconos/js.webp" alt="JavaScript" fluid />
                            <p style={{ marginTop: 10 }}>JavaScript</p>
                        </div>
                    </Col>
                    <Col xs={2} >
                        <div className="skill-box">
                            <Image src="/iconos/react.webp" alt="React" fluid />
                            <p style={{ marginTop: 10 }}>React</p>
                        </div>
                    </Col>
                    <Col xs={2} >
                        <div className="skill-box">
                            <Image src="/iconos/reactnative.webp" alt="React Native" fluid />
                            <p style={{ marginTop: 10 }}>React Native</p>
                        </div>
                    </Col>
                    <Col xs={2} >
                        <div className="skill-box">
                            <Image src="/iconos/figma.webp" alt="Figma" fluid />
                            <p style={{ marginTop: 10 }}>Figma</p>
                        </div>
                    </Col>
                    <Col xs={2} >
                        <div className="skill-box">
                            <Image src="/iconos/node.webp" alt="Node.js" fluid />
                            <p style={{ marginTop: 10 }}>Node.js</p>
                        </div>
                    </Col>
                    <Col xs={2} >
                        <div className="skill-box">
                            <Image src="/iconos/sass.webp" alt="Sass" fluid />
                            <p style={{ marginTop: 10 }}>Sass</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
