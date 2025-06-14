import styles from "./Account.module.css";
import LoginButton from "./AccountButton";
import { useState } from "react";

const LoginUser = ({ setShowLoginPopup, setLogStatus }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginDetails = [
        {
            email: "hovla.office@gmail.com",
            password: "fVlaho123"
        },
        {
            email: "admin@admin.com",
            password: "admin"
        }
    ]

    function handleLogin(e){
        e.preventDefault()
        const matchCredentials = loginDetails.find((user) => user.email === email && user.password === password);
        matchCredentials ? setLogStatus("success") : setLogStatus("failed");
        setShowLoginPopup(true);
    }

    return (
        <form onSubmit={handleLogin} className={styles.loginForm}>
            <h1>ALREADY OUR CUSTOMER?</h1>
            
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className={styles.rememberLogin}>
                <div className={styles.rememberMeCheckbox}>
                    <input type="checkbox" name="rememberMe" id="rememberMe" />
                    <label htmlFor="rememberMe">Remember me</label>
                </div>
                <a href="#">Forgot password?</a>
            </div>
            <LoginButton type="submit" className={styles.loginBtn} text="LOGIN" />
        </form>
    );
}

export default LoginUser;