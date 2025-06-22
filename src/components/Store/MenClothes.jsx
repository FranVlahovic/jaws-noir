import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./Store.module.css";

import StoreItemPreview from "./StoreItemPreview";

const MenClothes = () => {
    const [products, setProducts] = useState([]);
    const { setFavoriteItems, favoriteItems } = useOutletContext();
    
    function toggleFavorite(item) {
        setFavoriteItems(prev => {
            const isFavorite = prev.find(fav => fav.id === item.id);
            if (isFavorite) {
                return prev.filter(fav => fav.id !== item.id);
            } 
            else {
                return [...prev, item];
            }
        });
    }

    useEffect(() => {
        document.title = "Men's Collection | Jaws & Noir"
    }, [])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                const menClothes = data.filter(p => p.category === "men's clothing");
                setProducts(menClothes);
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <main className={styles.storeItemsSection}>
            <section className={styles.storeItemsContainer}>
                {products.map((item) => {
                    const isFavorite = favoriteItems.find(fav => fav.id === item.id);
                    return (    
                        <StoreItemPreview 
                        id={item.id}
                        image={item.image}
                        toggleFavorite={() => toggleFavorite(item)}
                        title={item.title}
                        price={Number(item.price)}
                        isFavorite={isFavorite}
                        category={item.category}
                        />
                    )
                })}
            </section>
        </main>
    );
};

export default MenClothes;