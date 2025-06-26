import LocationIcon from "../../assets/icons/map-marker.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";
import GithubIcon from "../../assets/icons/github-outline.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";

import styles from "./Footer.module.css";

const Footer = () => {
    const isMobile = window.innerWidth <= 768;

    return (
        <footer>
            <div className={styles.customerService}>
                <h2>CUSTOMER SERVICE</h2>
                <a href="#">Contact us</a>
                <a href="#">Returns</a>
                <a href="#">Payment methods</a>
                <a href="#">FAQ</a>
            </div>
            
            <div className={styles.legalInformation}>
                <h2>LEGAL INFORMATION</h2>
                <a href="#">Sale Conditions</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Accessibility</a>
            </div>

            <div className={styles.jawsWorld}>
                <h2>JAWS WORLD</h2>
                <a href="#">Company</a>
                <a href="#">Jaws & Noir Club</a>
                <a href="#">B2B</a>
            </div>

            <div className={styles.locationSocials}>
                <div className={styles.storeLocation}>
                    <h2>JAWS & NOIR STORES</h2>
                    <div className={styles.findStore}>
                        <img src={LocationIcon} alt="Footer Location Icon" className={styles.locationIcon} />
                        <a href="#">Find a store near you</a>
                    </div>
                </div>
                <div className={styles.followUs}>
                    {isMobile ? null : <h2>FOLLOW US</h2>}
                    <div className={styles.followUsSocials}>
                        <img src={FacebookIcon} alt="Footer Socials Facebook Icon" className={styles.socialsIcon} />
                        <a href="http://linkedin.com/in/franvlahovic/" target="_blank" >
                            <img src={LinkedinIcon} alt="Footer Socials LinkedIn Icon" className={styles.socialsIcon} />
                        </a>
                        <a href="https://github.com/franvlahovic" target="_blank">
                            <img src={GithubIcon} alt="Footer Socials GitHub Icon" className={styles.socialsIcon} />
                        </a>
                        <img src={InstagramIcon} alt="Footer Socials Instagram Icon" className={styles.socialsIcon} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;