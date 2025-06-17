import RegisterUser from "../Account/RegisterUser";
import styles from "./AboutUs.module.css";
import AboutUsCtas from "./AboutUsCtas";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate("/account")
        scrollTo(top)
    }
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
                    <AboutUsCtas />
                </section>
                <section className={styles.aboutUsRegister}>
                    <RegisterUser action={handleRegister} />
                </section>
            </section>
            <div className={styles.aboutUsImageSecond} />
        </main>    
    );
};

export default AboutUs;