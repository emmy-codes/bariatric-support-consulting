
import beforeImg from '../media/images/beforeOp.png';
import afterImg from '../media/images/3monthsPO.png';

function About() {
    return (
        <Container>
            <Row>
                <Col>
                    <Image src={beforeImg} alt="" />
                </Col>
                <Col>
                    <div>
                        Before text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nulla, dapibus eget enim sed, cursus eleifend tortor. Sed ornare nunc sed elementum pulvinar. Nunc massa est, fringilla id laoreet quis, ornare sed lacus.
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        After text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nulla, dapibus eget enim sed, cursus eleifend tortor. Sed ornare nunc sed elementum pulvinar. Nunc massa est, fringilla id laoreet quis, ornare sed lacus.
                    </div>
                </Col>
                <Col>
                    <Image src={afterImg} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default About;