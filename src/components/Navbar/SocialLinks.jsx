import { Link } from "react-router-dom";
import FavoritesIcon from "/src/assets/icons/heart-outline.svg"
const SocialLinks = () => {
    return (
        <div className="socialLinks">
            <h3>EN</h3>

            <button></button>
            
            <Link to="/store/favorites" aria-label="Store Favorites">
                <img src={FavoritesIcon} alt="" />
            </Link>

            <button></button>
        </div>
    );
};

export default SocialLinks;