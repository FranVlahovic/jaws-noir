import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import ProfileIcon from "/src/assets/icons/account-outline.svg";
import FavoritesIcon from "/src/assets/icons/heart-outline.svg"
import CartIcon from "/src/assets/icons/purse-outline.svg";

import SocialsButton from "./SocialsButton";

const SocialLinks = ({ toggleCartModal }) => {
    return (
        <div className={styles.socialLinks}>
            <h3>EN</h3>

            <Link to="login" aria-label="Go to Login Page">
                <img className={styles.socialsIcon} src={ProfileIcon} alt="Profile Icon" />
            </Link>

            <Link to="/store/favorites" aria-label="Go to Store Favorites">
                <img className={styles.socialsIcon} src={FavoritesIcon} alt="Favorites Icon" />
            </Link>

            <SocialsButton className={styles.cartBtn} action={() => toggleCartModal()} src={CartIcon} alt="Profile Icon" />
        </div>
    );
};

export default SocialLinks;