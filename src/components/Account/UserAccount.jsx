import LoginUser from "./LoginUser";
import RegisterUser from "./RegisterUser";
import styles from "./Account.module.css"; 
import { useState, useEffect } from "react";

const UserAccount = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function autoFillForm(){
        setEmail("admin@admin.com");
        setPassword("admin");
    }

    useEffect(() => {
            document.title = "Account | Jaws & Noir"
        }, [])

    return (
        <section className={styles.userAccount}>
            <div className={styles.loginContainer}>
                <LoginUser email={email} setEmail={setEmail} password={password} setPassword={setPassword} autoFillForm={autoFillForm} />
            </div>
            <div className={styles.registerContainer}>
                <RegisterUser email={email} setEmail={setEmail} password={password} setPassword={setPassword} autoFillForm={autoFillForm} action={autoFillForm} />
            </div>
        </section>
    );
}

export default UserAccount;