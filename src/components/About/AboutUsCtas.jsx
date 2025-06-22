import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";

const AboutUsCtas = () => {
  return (
    <>
      <div className={styles.ctaElm}>
        <h1>MEN'S COLLECTION</h1>
        <p>Browse our curated menswear catalogue—modern, comfortable, and bold.</p>
        <Link to="/store/men">
          <button className={styles.loginBtn}>SHOP MENSWEAR</button>
        </Link>
      </div>

      <div className={styles.ctaElm}>
        <h1>WOMEN'S COLLECTION</h1>
        <p>Explore sleek, expressive, and timeless styles tailored for women.</p>
        <Link to="/store/women">
          <button className={styles.loginBtn}>SHOP WOMENSWEAR</button>
        </Link>
      </div>
    </>
  );
};

export default AboutUsCtas;
