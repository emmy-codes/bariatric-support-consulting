
import beforeImg from '../media/images/beforeOp.png';
import afterImg from '../media/images/3monthsPO.png';

function About() {
    return (
        <div>

                <div>
                    <img src={beforeImg} alt="" />
                </div>
                <div>
                    <div>
                        Before text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nulla, dapibus eget enim sed, cursus eleifend tortor. Sed ornare nunc sed elementum pulvinar. Nunc massa est, fringilla id laoreet quis, ornare sed lacus.
                    </div>
                </div>
                <div>
                    <div>
                        After text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nulla, dapibus eget enim sed, cursus eleifend tortor. Sed ornare nunc sed elementum pulvinar. Nunc massa est, fringilla id laoreet quis, ornare sed lacus.
                    </div>
                </div>
                <div>
                    <img src={afterImg} alt="" />
                </div>
        </div>
    );
};

export default About;