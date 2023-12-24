import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
    return (
        <div className="about-container">
            <Container>
                <Row>
                    <Col className="about-col1">Image here</Col>
                    <Col className="about-col2">
                        Text here<Image />
                    </Col>
                </Row>
                <Row>
                    <Col className="about-col2">Text here<Image /></Col>
                    <Col className="about-col1">Image here</Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;