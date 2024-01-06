
import banner from "../media/images/header.jpg"

function Home() {

    return (
        <Container>
            <Row>
                <Col className="home-container">
                    <h1 className="home-header">Welcome to Bari-transform</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque velit nulla, dapibus eget enim sed, cursus eleifend tortor.
                        Sed ornare nunc sed elementum pulvinar. Nunc massa est, fringilla id laoreet quis, ornare sed lacus.</p>
                    <Button>Learn More</Button>
                </Col>
                <Col>
                    <img src={banner} className="img-fluid" alt="a fruit platter with citrus fruits and berries"/>
                </Col>
            </Row>
        </Container >
    );
};

export default Home;