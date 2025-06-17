import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";

const AboutUsCtas = () => {

    return (
        <>
            <div className={styles.ctaElm}>
                <h1>CLOTHES CATALOGUE</h1>
                <p>Discover our prizes, select size and color and confirm your address.</p>
                <Link to="/store">
                    <button className={styles.loginBtn}>DISCOVER THE CATALOGUE</button>
                </Link>
            </div>
            <div className={styles.ctaElm}>
                <h1>SHARE YOUR PHOTO</h1>
                <p>Each month, the best photos will win an exclusive Jaws&Noir garment.</p>
                <button className={styles.loginBtn}>JOIN THE CHALLENGE</button>
            </div>
        </>
    );
};

export default AboutUsCtas;