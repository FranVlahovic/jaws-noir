import NavbarLinks from "./NavbarLinks";
import SocialLinks from "./SocialLinks";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

const Navbar = ({ toggleCartModal,cartItems }) => {

    return (
        <nav className={styles.navbar}>
            <NavbarLinks />
            <Logo />
            <SocialLinks toggleCartModal={toggleCartModal} cartItems={cartItems} />
        </nav>
    );
};

export default Navbar;