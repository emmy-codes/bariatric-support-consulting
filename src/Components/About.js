import beforeImg from '../media/images/beforeOp.png';
import afterImg from '../media/images/3monthsPO.png';

function About() {
    return (
        <div id="about-container" className="">
            <h2>About Me</h2>
            <div>
                <img src={beforeImg} alt="" className="before-and-after before-img" />
                <h3>How it started...</h3>
                <p className="content-text">
                    Before text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nulla, dapibus eget enim sed, cursus eleifend tortor. Sed ornare nunc sed elementum pulvinar. Nunc massa est, fringilla id laoreet quis, ornare sed lacus.
                </p>
            </div>
            <div>
                <img src={afterImg} alt="" className="before-and-after" />
                <h3>... how it's going!</h3>
                <p className="content-text">
                    After text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nulla, dapibus eget enim sed, cursus eleifend tortor. Sed ornare nunc sed elementum pulvinar. Nunc massa est, fringilla id laoreet quis, ornare sed lacus.
                </p>
            </div>
        </div>
    );
};

export default About;