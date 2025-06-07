import styles from "./Navbar.module.css";

const SocialsButton = (props) => {
    return (
        <button className={props.className} onClick={props.action}>
            <img className={styles.socialsIcon} src={props.src} alt={props.alt} />
        </button>
    );
};

export default SocialsButton;