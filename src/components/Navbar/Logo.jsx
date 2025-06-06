import { Link } from "react-router-dom";
import LogoImage from "../../assets/icons/shark-fin-outline.svg"
import styles from "./Navbar.module.css";

const Logo = () => {
    return (
        <div className={styles.logo}>
                <Link to="/">
                    <img src={LogoImage} alt="" />
                </Link>
        </div>
    );
};

export default Logo;