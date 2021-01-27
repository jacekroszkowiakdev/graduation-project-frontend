import { Link } from "react-router-dom";
import icon from "../img/account-icon.png";
import "./AccountButton.css";

const AccountButton = () => {
    return (
        <div className="account-button">
            <Link to={"/login/"}>
                <img src={icon} alt="account-icon" />
            </Link>
        </div>
    );
    // {!userLoggedIn &&
    // (<Link to={"/login/"}>
    //     <img src={icon} alt="account-icon" />
    // </Link>)}
    // {userLoggedIn &&
    // (<Link to={"/logout"}>
    //     <img src={icon} alt="account-icon" />
    // </Link>)}
};

export default AccountButton;
