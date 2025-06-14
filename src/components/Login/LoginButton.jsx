const LoginButton = (props) => {
    return (
        <button type="button" className={props.className} onClick={props.action}>
            {props.text}
        </button>
    );
};

export default LoginButton;