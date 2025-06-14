import { useState, useEffect } from "react";
import LoginUser from "./LoginUser";


const Login = () => {

    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [logStatus, setLogStatus] = useState(false);

    const loginDetails = [
        {
            username: "franvlahovic",
            password: "fVlaho123"
        },
    ]

    function toggleLoginPopup(){
        setShowLoginPopup(prev => !prev)
    }

    return (
        <>
            <div className="loginContainer">
                <LoginUser toggleLoginPopup={toggleLoginPopup} />
            </div>
            <div className="registerContainer">

            </div>

            {showLoginPopup && 
                logStatus ? 
                <div className="loginSuccess">
                    <div className="loginIcon"><img src="" alt="" /></div>
                    <span>Logged in successfully.</span>
                </div> : 
                <div className="loginFailed">
                    <div className="loginIcon"><img src="" alt="" /></div>
                    <span>Login failed.</span>
                </div>
            }
        </>
    );
}

export default Login;