const AccountButton = (props) => {
    return (
        <button type={props.type} className={props.className} onClick={props.action}>
            {props.text}
        </button>
    );
};

export default AccountButton;