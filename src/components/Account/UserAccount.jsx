import LoginUser from "./LoginUser";
import RegisterUser from "./RegisterUser";

const UserAccount = () => {

    return (
        <>
            <div className="loginContainer">
                <LoginUser />
            </div>
            <div className="registerContainer">
                <RegisterUser />
            </div>
        </>
    );
}

export default UserAccount;