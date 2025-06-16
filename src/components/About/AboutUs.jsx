import RegisterUser from "../Account/RegisterUser";
import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
    return (
        <main className={styles.aboutUsSection}>
            <div className={styles.aboutUsImageFirst}/>
            <section className={styles.aboutUsMain}>
                <section className={styles.aboutUsWelcome}>
                    <h1>WELCOME TO JAWS & NOIR</h1>
                    <p>Jaws & Noir—Where Heritage Meets Modern Style. Rooted in European craftsmanship, Jaws & Noir brings quality, functionality, and effortless sophistication to your wardrobe. Inspired by timeless maritime aesthetics and the rugged elegance of adventure, we design clothing that merges durability with refined style.</p>
                    <p>From sleek casual wear to premium essentials, every piece reflects our commitment to authenticity, comfort, and versatility. Whether you're strolling the city streets or setting sail on your next journey, Jaws & Noir ensures you move through life with confidence and ease.</p>
                </section>
                <section className={styles.aboutUsCTA}>
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
                </section>
                <section className={styles.aboutUsRegister}>
                    <RegisterUser />
                </section>
            </section>
            <div className={styles.aboutUsImageSecond} />
        </main>    
    );
};

export default AboutUs;