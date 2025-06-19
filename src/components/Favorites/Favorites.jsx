import { useOutletContext } from "react-router-dom";
import FavoriteItem from "./FavoriteItem";
import styles from "./Favorites.module.css";

const Favorites = () => {
    const { setCartItems, setFavoriteItems, favoriteItems } = useOutletContext();

    function removeFavoriteItem(id){
        setFavoriteItems(prev => prev.filter(item => item.id !== id));
    }

    function addToCart(item){
        removeFavoriteItem(item.id)
        setCartItems(prev => [...prev, item]);
    }

    return(
        <main className={styles.favoritesSection}>
            <h2>{`WISHLIST (${favoriteItems.length})`}</h2>
            <section className={styles.favoriteItemsContainer}>
                {favoriteItems.map((item) => (
                    <FavoriteItem 
                        key={item.id} 
                        url={item.image}
                        title={item.title} 
                        price={item.price}
                        removeFavorite={() => removeFavoriteItem(item.id)}
                        action={() => addToCart(item)}
                    />
                ))}
            </section>
        </main>
    );
};

export default Favorites;