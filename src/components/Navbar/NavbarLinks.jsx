import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavbarLinks = () => {
    return (
        <ul className={styles.navbarLinks}>
            <li className={styles.link}>
                <h3>
                    <Link to="/">HOME</Link>
                </h3>
            </li>
            <li className={styles.link}>
                <h3>
                    <Link to="/about">ABOUT US</Link>
                </h3>
            </li>
            <li className={styles.link}>
                <h3>
                    <Link to="/store">STORE</Link>
                </h3>
            </li>
        </ul>
    );
};

export default NavbarLinks;