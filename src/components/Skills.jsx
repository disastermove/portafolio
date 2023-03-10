import { Container, Row, Col, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section id="skills" className='mb-5 mt-5 animate-fade-in-down'>
            <h2 className='text-center'>{t('skills')}</h2>
            <Container className='grids'>
                <Row className='rower'>
                    <Col xs={2}>
                        <div className="skill-box">
                            <Image src="/iconos/html.webp" alt="HTML" fluid />
                            <p>HTML</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="skill-box">
                            <Image src="/iconos/css.webp" alt="CSS" fluid />
                            <p>CSS</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="skill-box">
                            <Image src="/iconos/js.webp" alt="JavaScript" fluid />
                            <p>JavaScript</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="skill-box">
                            <Image src="/iconos/react.webp" alt="React" fluid />
                            <p>React</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="skill-box">
                            <Image src="/iconos/reactnative.webp" alt="React Native" fluid />
                            <p>React Native</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="skill-box">
                            <Image src="/iconos/figma.webp" alt="Figma" fluid />
                            <p>Figma</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="skill-box">
                            <Image src="/iconos/node.webp" alt="Node.js" fluid />
                            <p>Node.js</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className="skill-box">
                            <Image src="/iconos/sass.webp" alt="Sass" fluid />
                            <p>Sass</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
