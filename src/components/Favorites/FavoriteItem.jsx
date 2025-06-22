import HeartOutline from "/src/assets/icons/heart-outline.svg";
import HeartFilled from "/src/assets/icons/heart.svg";
import styles from "./Favorites.module.css";

const FavoriteItem = (props) => {
    return (
        <div className={styles.favoriteItemCard} key={props.key}>
            <div className={styles.favoriteItemCardImage}>
                <img className={styles.favoriteItemImage} src={props.url} alt="Favorite Item Image" />
                <button className={styles.removeFavoriteBtn} onClick={props.removeFavorite}>
                    <img src={props.isFavorite ? HeartFilled : HeartOutline } alt="Favorite Icon" />    
                </button>
            </div>
            <div className={styles.favoriteItemCardDetails}>
                <h2>{props.title}</h2>
                <span>{`€ ${props.price.toFixed(2)}`}</span>
            </div>
        </div>
    );
};

export default FavoriteItem;