import instagram from "../media/svg-icons/instagram.svg";
import tiktok from "../media/svg-icons/tiktok.svg";

function Footer() {
    return (
        <div className="footer-container">
            <ul className="footer-svgs">
                <li><a href="https://www.instagram.com/nadiasvsgjourney"><img className="footer-svgs-imgs" src={instagram} alt="Instagram logo and clickable link to Instagram" /></a></li>
                <li><a href="https://www.tiktok.com/"><img className="footer-svgs-imgs" src={tiktok} alt="Tiktok logo and clickable link to Tiktok" /></a></li>
            </ul>
            <p>©️Bari-transform 2024</p>
        </div>
    );
};

export default Footer;