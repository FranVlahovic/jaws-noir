import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer/Footer';
import MobileMenu from './components/MobileMenu';

export default function App(){
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const [favoriteItems, setFavoriteItems] = useState(() => {
        const storedFavorites = localStorage.getItem('favoriteItems');
        return storedFavorites ? JSON.parse(storedFavorites) : []
    })

    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        return storedCartItems ? JSON.parse(storedCartItems) : []
    })

    function toggleCartModal(){
        setIsCartOpen(prev => !prev)
        isMenuOpen && setIsMenuOpen(prev => !prev)
    }

    function toggleMobileModal(){
        setIsMenuOpen(prev => !prev)
    }

    function removeCartItem(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    useEffect(() => {
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
    }, [favoriteItems])

    return (
        <>
            <Navbar toggleMobileModal={toggleMobileModal} toggleCartModal={toggleCartModal} cartItems={cartItems} favoriteItems={favoriteItems} />
            <Outlet context={{ setCartItems, favoriteItems, setFavoriteItems }}/>
            <Footer />
            {isCartOpen && 
                <div className="cartOverlay">
                    <Sidebar cartItems={cartItems} toggleCartModal={toggleCartModal} removeCartItem={removeCartItem} />
                </div>
            }
            {isMenuOpen && 
                <div className="menuOverlay">
                    <MobileMenu toggleCartModal={toggleCartModal} toggleMobileModal={toggleMobileModal} cartItems={cartItems} favoriteItems={favoriteItems} />
                </div>
            }
        </>
    );
}
