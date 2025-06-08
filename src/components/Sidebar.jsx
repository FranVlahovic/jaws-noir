import BackIcon from "../assets/icons/chevron-left.svg"
import { Link } from "react-router-dom";
import styles from "./Navbar/Navbar.module.css";

const Sidebar = ({ cartItems, toggleCartModal }) => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <aside className={styles.cartSidebar}>
            <div className={styles.storeNav}>
                <button className={styles.backBtn} aria-label="Close Sidebar" onClick={toggleCartModal}>
                    <img src={BackIcon} alt="Back Icon" />
                    <span>Back</span>
                </button>
            </div>
            <div className={styles.storeItemsContainer}>
                {cartItems.length > 0 ?
                    <>
                        <div className={styles.storeCartItems}>
                            {cartItems.map((props) => (    
                                <div className={styles.cartItem} key={props.id}>
                                    <div className={styles.cartItemInfo}>
                                        <img src={props.image} alt={`${props.name} image`} />
                                        <div className={styles.cartItemDetails}>
                                            <h2>{props.name}</h2>
                                            <span>{`CATEGORY: ${props.category}`}</span>
                                            <span>{`SIZE: ${props.size}`}</span>
                                            <span>{`QUANTITY: ${props.quantity}`}</span>
                                        </div>
                                    </div>
                                    <div className={styles.cartItemPrice}>
                                        <span>{`€ ${props.price}`}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.storeCartTotalPrice}>
                            <h2>ORDER TOTAL</h2>
                            <span>{`€ ${totalPrice.toFixed(2)}`}</span>
                        </div>
                        <button className={styles.checkoutBtn} aria-label="Go to checkout">GO TO CHECKOUT</button>
                    </> :
                    <>
                        <div className={styles.storeCartItems}>
                            <span>You have no items in your shopping cart.</span>
                        </div>
                        <Link to="/store" className={styles.shopNowBtn} onClick={toggleCartModal} aria-label="Go to store page">
                        SHOP NOW
                        </Link>
                    </>
                }
            </div>
        </aside>
    );
}

export default Sidebar;