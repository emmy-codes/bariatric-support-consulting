import beforeImg from '../media/images/beforeOp.png';
import afterImg from '../media/images/3monthsPO.png';

function About() {
    return (
        <div id="about-container">
            <h1>About Me</h1>
            <div>
                <img src={beforeImg} alt="" className="before-and-after" />
                <p>
                    Before text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nulla, dapibus eget enim sed, cursus eleifend tortor. Sed ornare nunc sed elementum pulvinar. Nunc massa est, fringilla id laoreet quis, ornare sed lacus.
                </p>
            </div>
            <div>
                <img src={afterImg} alt="" className="before-and-after" />
                <p>
                    After text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nulla, dapibus eget enim sed, cursus eleifend tortor. Sed ornare nunc sed elementum pulvinar. Nunc massa est, fringilla id laoreet quis, ornare sed lacus.
                </p>
            </div>
        </div>
    );
};

export default About;