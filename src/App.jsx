import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer/Footer';

export default function App(){
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const [favoriteItems, setFavoriteItems] = useState([])

    function toggleCartModal(){
        setIsCartOpen(prev => !prev)
    }

    function removeCartItem(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    return (
        <>
            <Navbar toggleCartModal={toggleCartModal} cartItems={cartItems} favoriteItems={favoriteItems} />
            <Outlet context={{ setCartItems, favoriteItems, setFavoriteItems }}/>
            <Footer />
            {isCartOpen && 
                <div className="cartOverlay">
                    <Sidebar cartItems={cartItems} toggleCartModal={toggleCartModal} removeCartItem={removeCartItem} />
                </div>
            }
        </>
    );
}
