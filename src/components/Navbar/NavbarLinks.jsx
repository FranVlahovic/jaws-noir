import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavbarLinks = ({ toggleMobileModal }) => { 

    return (
        <ul className={styles.navbarLinks}>
            <li className={styles.link}>
                <h3>
                    <Link to="/" onClick={() => toggleMobileModal()}>HOME</Link>
                </h3>
            </li>
            <li className={styles.link}>
                <h3>
                    <Link to="/about" onClick={() => toggleMobileModal()} >ABOUT US</Link>
                </h3>
            </li>
            <li className={styles.link}>
                <h3>
                    <Link to="store/men" onClick={() => toggleMobileModal()} >MEN</Link>
                </h3>
            </li>
            <li className={styles.link}>
                <h3>    
                    <Link to="store/women" onClick={() => toggleMobileModal()} >WOMEN</Link>
                </h3>
            </li>
        </ul>
        
    );
};

export default NavbarLinks;