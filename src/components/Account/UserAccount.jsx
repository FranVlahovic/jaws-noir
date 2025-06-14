import { useState } from "react";
import LoginUser from "./LoginUser";

import SuccessIcon from "../../assets/icons/check-bold.svg";
import FailedIcon from "../../assets/icons/close-thick.svg";

const UserAccount = () => {

    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [logStatus, setLogStatus] = useState("");

    return (
        <>
            <div className="loginContainer">
                <LoginUser showLoginPopup={showLoginPopup} setShowLoginPopup={setShowLoginPopup} setLogStatus={setLogStatus} />
            </div>
            <div className="registerContainer">

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