import NavbarLinks from "./NavbarLinks";
import SocialLinks from "./SocialLinks";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import MenuIcon from "/src/assets/icons/menu.svg"

const Navbar = ({ toggleCartModal, cartItems, favoriteItems, toggleMobileModal }) => {
    const isMobile = window.innerWidth <= 768;
    
    return (
        <nav className={styles.navbar}>
            {!isMobile ?
                <>
                <NavbarLinks />
                <Logo />
                <SocialLinks 
                    toggleCartModal={toggleCartModal} 
                    cartItems={cartItems} 
                    favoriteItems={favoriteItems} 
                />
                </>
                :
            <>
                <button className={styles.menuBtn} onClick={() => toggleMobileModal()} alt="Mobile Menu Icon">
                    <img src={MenuIcon} alt="" />
                </button>
                <Logo />
            </>
            }
        </nav>
    );
};

export default Navbar;