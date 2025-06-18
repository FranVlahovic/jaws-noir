import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer/Footer';

export default function App(){
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([
        {
            id: crypto.randomUUID(),
            name: "TEST PRODUCT",
            image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
            category: "Men Clothing",
            size: "L",
            quantity: 1,
            price: 275,
        },
        
    ])

    function toggleCartModal(){
        setIsCartOpen(prev => !prev)
    }

    function removeCartItem(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    return (
        <>
            <Navbar toggleCartModal={toggleCartModal} cartItems={cartItems} />
            <Outlet />
            <Footer />
            {isCartOpen && 
                <div className="cartOverlay">
                    <Sidebar cartItems={cartItems} toggleCartModal={toggleCartModal} removeCartItem={removeCartItem} />
                </div>
            }
        </>
    );
}
