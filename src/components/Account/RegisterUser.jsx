import RegisterButton from "./AccountButton";
import styles from "./Account.module.css";

const RegisterUser = () => {

    return(
        <>
            <div className="registerCta">
                <div className="aboutClub">
                    <h1>NEW CUSTOMER?</h1>
                    <p>To enjoy all the advantages, join the Jaws & Noir club.</p>
                    <p>A dedicated are where you can collect miles, choose prizes from an extensive catalogue, access exclusive initiatives and prize contests and manage purchases and returns more quickly, saving your delivery preferences and payment options.</p>
                </div>
                <RegisterButton type="button" className={styles.loginBtn} text="REGISTER NOW" />
            </div>
            <div className="clubAdvantages">
                <h2>THE JAWS & NOIR CLUB OFFERS MANY ADVANTAGES TO ITS MEMBERS:</h2>
                <ul>
                    <li>A dedicated area where you can collect miles by registering your purchases.</li>
                    <li>A dedicated prize catalogue.</li>
                    <li>A wishlist where you can save your favorite products.</li>
                    <li>A contest with prizes.</li>
                    <li>Reserved promotions.</li>
                    <li>Early access to exclusive initiatives and events.</li>
                </ul>
            </div>
        </>
    );
};

export default RegisterUser;