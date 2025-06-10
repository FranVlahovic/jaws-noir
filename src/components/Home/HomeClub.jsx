import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const HomeClub = () => {
    return(
        <div className={styles.homeClub}>
            <h1 className={styles.clubHeading}>
                JAWS & NOIR CLUB <br />
                WORLD OF SERVICES AND UNIQUE SURPRISES FOR OUR CUSTOMERS
            </h1>
            <Link to="/about/#jawsclub" className={styles.homeLink}>
                JOIN THE CLUB
            </Link>
        </div>
    );
};

export default HomeClub;