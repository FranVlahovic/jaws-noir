import { Link } from "react-router-dom";
import styles from "./Store.module.css";
import HeartOutline from "../../assets/icons/heart-outline.svg";
import HeartFilled from "../../assets/icons/heart.svg";

const StoreItemPreview = (props) => {
    return(
        <div className={styles.storeItemCard} key={props.id}>
            <div className={styles.storeItemCardImage}>
                <Link key={props.id} to={`/store/${props.category === "men's clothing" ? "men" : "women"}/${props.id}`}>
                    <img className={styles.storeItemImage} src={props.image} alt="Store Item Image" />
                </Link>
                <button className={styles.toggleFavoriteBtn} onClick={props.toggleFavorite}>
                    <img src={props.isFavorite ? HeartFilled : HeartOutline } alt="Favorite Icon" />    
                </button>  
            </div>
            <div className={styles.storeItemCardDetails}>
                <h2>{props.title}</h2>
                <span>{`€ ${props.price.toFixed(2)}`}</span>
            </div>
        </div>
    );
};

export default StoreItemPreview;