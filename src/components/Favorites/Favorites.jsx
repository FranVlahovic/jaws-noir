import { useOutletContext } from "react-router-dom";
import FavoriteItem from "./FavoriteItem";
import styles from "./Favorites.module.css";
import { useEffect } from "react";

const Favorites = () => {
    const { setFavoriteItems, favoriteItems } = useOutletContext();

    function removeFavoriteItem(id){
        setFavoriteItems(prev => prev.filter(item => item.id !== id));
    }

    useEffect(() => {
        document.title = "Favorites | Jaws & Noir"
    }, [])

    return(
        <main className={styles.favoritesSection}>
            <h2>{`WISHLIST (${favoriteItems.length})`}</h2>
            <section className={styles.favoriteItemsContainer}>
                {favoriteItems.map((item) => {
                    const isFavorite = favoriteItems.find(fav => fav.id === item.id);
                    return (
                        <FavoriteItem 
                        key={item.id} 
                        url={item.image}
                        title={item.title} 
                        price={item.price}
                        removeFavorite={() => removeFavoriteItem(item.id)}
                        isFavorite={isFavorite}
                        />
                    )
                })}
            </section>
        </main>
    );
};

export default Favorites;