import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./Store.module.css";

import StoreItemPreview from "./StoreItemPreview";

const MenClothes = () => {
    const [products, setProducts] = useState([]);
    const { setFavoriteItems } = useOutletContext();
    
    function toggleFavorite(item){
        setFavoriteItems(prev => [...prev, item])
    }

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
        <main className="storeItemsSection">
            <section className={styles.storeItemsContainer}>
                {products.map((item) => (
                    <StoreItemPreview 
                        id={item.id}
                        image={item.image}
                        toggleFavorite={() => toggleFavorite(item)}
                        title={item.title}
                        price={Number(item.price)}
                    />
                ))}
            </section>
        </main>
    );
};

export default MenClothes;