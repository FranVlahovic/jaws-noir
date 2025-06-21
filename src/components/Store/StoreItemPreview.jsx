import { Link } from "react-router-dom";
import styles from "./Store.module.css";
import FavoritesIcon from "../../assets/icons/heart-outline.svg";

const StoreItemPreview = (props) => {
    return(
        <div key={props.id} to={`/store/men/${props.id}`}>
            <div className={styles.storeItemCard}>
                <div className={styles.storeItemCardImage}>
                    <Link key={props.id} to={`/store/men/${props.id}`}>
                        <img className={styles.storeItemImage} src={props.image} alt="Store Item Image" />
                    </Link>
                    <button className={styles.toggleFavoriteBtn} onClick={props.toggleFavorite}>
                        <img src={FavoritesIcon} alt="Favorite Icon" />    
                    </button>  
                </div>
                <div className={styles.storeItemCardDetails}>
                    <h2>{props.title}</h2>
                    <span>{`€ ${props.price.toFixed(2)}`}</span>
                </div>
            </div>
        </div>
    );
};

export default StoreItemPreview;