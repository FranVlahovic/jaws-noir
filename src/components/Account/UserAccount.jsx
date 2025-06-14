import { useState, useEffect } from "react";
import LoginUser from "./LoginUser";
import RegisterUser from "./RegisterUser";

import SuccessIcon from "../../assets/icons/check-bold.svg";
import FailedIcon from "../../assets/icons/close-thick.svg";

const UserAccount = () => {

    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [logStatus, setLogStatus] = useState("");

    useEffect(() => {
        if(showLoginPopup){
            const timer = setTimeout(() => {
                setShowLoginPopup(false);
                setLogStatus("");
            }, 20000);
            return () => clearTimeout(timer)
        }
    }, [showLoginPopup])

    return (
        <>
            <div className="loginContainer">
                <LoginUser setShowLoginPopup={setShowLoginPopup} setLogStatus={setLogStatus} />
            </div>
            <div className="registerContainer">
                <RegisterUser />
            </div>

            {showLoginPopup && (
                <div className={logStatus === "success" ? "loginSuccess" : "loginFailed"}>
                    <div className="loginIcon">
                        <img src={logStatus === "success" ? SuccessIcon : FailedIcon} alt={logStatus === "success" ? "Success Icon" : "FailedIcon"} />
                    </div>
                    <span>
                        {logStatus === "success"
                            ? "Logged in successfully."
                            : "Login failed."}
                    </span>
                </div>
            )}
        </>
    );
}

export default UserAccount;