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

            {/* <SocialsButton className="profileBtn" action={() => openProfileModal} src={ProfileIcon} alt="Profile Icon" /> */}
            
            <Link to="/store/favorites" aria-label="Store Favorites">
                <img className={styles.socialsIcon} src={FavoritesIcon} alt="Favorites Icon" />
            </Link>

            <SocialsButton className={styles.cartBtn} action={() => toggleCartModal()} src={CartIcon} alt="Profile Icon" />
        </div>
    );
};

export default SocialLinks;