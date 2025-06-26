import styles from "./Account.module.css";
import { useEffect, useState } from "react";
import SuccessIcon from "../../assets/icons/check-bold.svg";
import AccountButton from "./AccountButton";

const LoginUser = ({ email, setEmail, password, setPassword, autoFillForm }) => {

    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [logStatus, setLogStatus] = useState(() => {
        const storedStatus = localStorage.getItem('logStatus');
        return storedStatus ? storedStatus : ""
    });

    // PUBLIC SINCE IT DOESN'T HAVE REAL AUTH
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

    async function handleLogin(e) {
        e.preventDefault();

        setShowLoginPopup(true);
        setLogStatus("checking");
    
        await new Promise((resolve) => setTimeout(resolve, 3000));
    
        const matchCredentials = loginDetails.find(
            (user) => user.email === email && user.password === password
        );
    
        if (matchCredentials) {
            setLogStatus("success");
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setLogStatus("loggedIn");
        } else {
            setLogStatus("failed");
            await new Promise((resolve) => setTimeout(resolve, 2000));
            handleLogout();
        }
    }
    

    function handleLogout(){
        setLogStatus("")
        setEmail("")
        setPassword("")
    }

    useEffect(() => {
        localStorage.setItem('logStatus', logStatus);
    }, [logStatus])


    return (
        <>
        {logStatus !== "loggedIn" ? 
            <form onSubmit={handleLogin} className={styles.loginForm}>
                <h1>ALREADY OUR CUSTOMER?</h1>
                
                <div className={styles.formGroup}>
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className={styles.rememberLogin}>
                    <div className={styles.rememberMeCheckbox}>
                        <input type="checkbox" name="rememberMe" id="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <a href="#" onClick={autoFillForm}>Forgot password?</a>
                </div>
                <AccountButton type="submit" className={styles.loginBtn} text="LOGIN" />
                
                {showLoginPopup && (
                    <span className={styles.loginStatusMsg}>
                        {logStatus === "checking" && "Checking credentials..."}
                        {logStatus === "failed" && "Login failed."}
                        {logStatus === "success" && "Logged in successfully."}
                    </span>
                )}

            </form> : 
            <div className={styles.loggedIn}>
                <img src={SuccessIcon} alt="Successful Login Icon" />
                <div className={styles.loggedInDetails}>
                    <h1>YOU ARE ALL SET!</h1>
                    <p>You are now ready to use all of the benefits included with your Jaws & Noir Club Subscription</p>
                    <p>Click <a href="#" onClick={handleLogout}>here</a> to logout.</p>
                </div>
            </div>
        }
        </>
    );
}

export default LoginUser;