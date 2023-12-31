import { Container, Row, Col, Image } from 'react-bootstrap';
import beforeImg from '../media/images/beforeOp.png';
import afterImg from '../media/images/3monthsPO.png';

function About() {
    return (
        <div className="about-container">
            <Container>
                <Row>
                    <Col className="about-col1"><img src={beforeImg} /></Col>
                    <Col className="about-col2">
                        Text here<Image />
                    </Col>
                </Row>
                <Row>
                    <Col className="about-col2">Text here<Image /></Col>
                    <Col className="about-col1"><img src={afterImg}/></Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;