import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer/Footer';

export default function App(){
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    function toggleCartModal(){
        setIsCartOpen(prev => !prev)
    }

    return (
        <>
            <Navbar toggleCartModal={toggleCartModal} />
            <Outlet />
            <Footer />
            {isCartOpen && 
                <div className="cartOverlay">
                    <Sidebar cartItems={cartItems} toggleCartModal={toggleCartModal} />
                </div>
            }
        </>
    );
}
