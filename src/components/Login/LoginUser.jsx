import styles from "./Login.module.css";
import LoginButton from "./LoginButton";


const LoginUser = ({ toggleLoginPopup }) => {
    return (
        <form action="/" className={styles.loginForm}>
            <h1>ALREADY OUR CUSTOMER?</h1>
            
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" />

            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="password" />

            <div className={styles.rememberLogin}>
                <div className={styles.rememberMeCheckbox}>
                    <input type="checkbox" name="rememberMe" id="rememberMe" />
                    <label htmlFor="rememberMe">Remember me</label>
                </div>
                <a href="#">Forgot password?</a>
            </div>
            <LoginButton className={styles.loginBtn} action={() => toggleLoginPopup()} text="LOGIN" />
        </form>
    );
}

export default LoginUser;