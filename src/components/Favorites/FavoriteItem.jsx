import FavoritesIcon from "/src/assets/icons/heart-outline.svg";
import styles from "./Favorites.module.css";

const FavoriteItem = (props) => {
    return (
        <div className={styles.favoriteItemCard} key={props.key}>
            <div className={styles.favoriteItemCardImage}>
                <img className={styles.favoriteItemImage} src={props.url} alt="Favorite Item Image" />
                <button className={styles.removeFavoriteBtn} onClick={props.removeFavorite}>
                    <img src={FavoritesIcon} alt="Favorite Icon" />    
                </button>
            </div>
            <div className={styles.favoriteItemCardDetails}>
                <h2>{props.title}</h2>
                <span>{`€ ${props.price.toFixed(2)}`}</span>
            </div>
            {/* <button className={styles.favoriteToCartBtn} onClick={props.action}>ADD TO CART</button> */}
        </div>
    );
};

export default FavoriteItem;