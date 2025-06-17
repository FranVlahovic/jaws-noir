import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const HomeClub = () => {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate("/account#jawsClub")
        scrollTo(top)
    }

    return(
        <div className={styles.homeClub}>
            <h1 className={styles.clubHeading}>
                JAWS & NOIR CLUB <br />
                WORLD OF SERVICES AND UNIQUE SURPRISES FOR OUR CUSTOMERS
            </h1>
            <Link onClick={handleRegister} className={styles.homeLink}>
                JOIN THE CLUB
            </Link>
        </div>
    );
};

export default HomeClub;