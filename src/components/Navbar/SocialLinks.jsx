import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import ProfileIcon from "/src/assets/icons/account-outline.svg";
import FavoritesIcon from "/src/assets/icons/heart-outline.svg"
import CartIcon from "/src/assets/icons/purse-outline.svg";

import SocialsButton from "./SocialsButton";

const SocialLinks = ({ toggleCartModal, cartItems, favoriteItems, toggleMobileModal }) => {
    const isMobile = window.innerWidth <= 768;
    return (
        <div className={styles.socialLinks}>
            {!isMobile ?
            <>
                <h3>EN</h3>

                <Link to="account" aria-label="Go to Login Page">
                    <img className={styles.socialsIcon} src={ProfileIcon} alt="Profile Icon" />
                </Link>
                
                <div className={styles.iconAndCount}>
                    <Link to="/store/favorites" aria-label="Go to Store Favorites">
                        <img className={styles.socialsIcon} src={FavoritesIcon} alt="Favorites Icon" />
                    </Link>
                    {favoriteItems.length > 0 && <div className={styles.itemCountBadge}><span>{favoriteItems.length}</span></div> }
                </div>

                <div className={styles.iconAndCount}>
                    <SocialsButton className={styles.cartBtn} action={() => toggleCartModal()} src={CartIcon} alt="Profile Icon"></SocialsButton>
                    {cartItems.length > 0 && <div className={styles.itemCountBadge}><span>{cartItems.length}</span></div>}
                </div>
            </> :
            <>
                <Link to="account" aria-label="Go to Login Page" onClick={() => toggleMobileModal()}>
                    <h3>ACCOUNT</h3>   
                </Link>
                
                <Link to="/store/favorites" aria-label="Go to Store Favorites" onClick={() => toggleMobileModal()} >
                    <h3>FAVORITES</h3>
                </Link>
                
                <button className={styles.cartBtn} onClick={() => toggleCartModal()}>
                    <h3>CART</h3>
                </button>
            </>
            }
        </div>
    );
};

export default SocialLinks;