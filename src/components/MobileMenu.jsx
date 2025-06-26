import NavbarLinks from "./Navbar/NavbarLinks";
import SocialLinks from "./Navbar/SocialLinks";
import styles from "./MobileMenu.module.css";
import MenuImage from "/src/assets/images/menu1.jpg"

const MobileMenu = ({ toggleCartModal, cartItems, favoriteItems, toggleMobileModal }) => {
    return (
        <aside className={styles.menuSidebar}>
            <div className={styles.storeNav}>
                <button className={styles.closeBtn} aria-label="Close Sidebar" onClick={toggleMobileModal}>
                    x
                </button>
            </div>
            <NavbarLinks toggleMobileModal={toggleMobileModal} />
            <img src={MenuImage} alt="Mobile menu Image" />
            <SocialLinks 
                toggleCartModal={toggleCartModal} 
                cartItems={cartItems} 
                favoriteItems={favoriteItems}
                toggleMobileModal={toggleMobileModal}
            />
        </aside>
    );
}
export default MobileMenu;