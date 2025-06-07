import BackIcon from "../assets/icons/chevron-left.svg"
import { Link } from "react-router-dom";

const Sidebar = ({ cartItems, toggleCartModal }) => {
    return (
        <div className="cartSidebar">
            <div className="storeCart-nav">
                <button className="backBtn" aria-label="Close Sidebar" onClick={toggleCartModal}>
                    <img src={BackIcon} alt="Back Icon" />
                    <span>Back</span>
                </button>
            </div>
            <div className="storeCart-items-container">
                {cartItems.length > 0 ?
                    <>
                        <div className="storeCart-items">
                            {cartItems.map((props) => (    
                                <div className="cartItem" key={props.id}>
                                    <div className="cartItem-info">
                                        <img src={props.image} alt={`${props.name} image`} />
                                        <div className="cartItem-details">
                                            <h2>{props.name}</h2>
                                            <span>{`CATEGORY: ${props.category}`}</span>
                                            <span>{`SIZE: ${props.size}`}</span>
                                            <span>{`QUANTITY: ${props.quantity}`}</span>
                                        </div>
                                    </div>
                                    <div className="cartItem-price">
                                        <span>{`€ ${props.price}`}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="storeCart-items-total">
                            <h2>ORDER TOTAL</h2>
                            <span>{`€1000`}</span>
                        </div>
                        <button className="checkoutBtn" aria-label="Go to checkout">GO TO CHECKOUT</button>
                    </> :
                    <>
                        <div className="storeCart-items">
                            <span>You have no items in your shopping cart.</span>
                        </div>
                        <button className="shopNowBtn" aria-label="Go to store page" onClick={toggleCartModal}><Link to="/store">SHOP NOW</Link></button>
                    </>
                }
            </div>
        </div>
    );
}

export default Sidebar;