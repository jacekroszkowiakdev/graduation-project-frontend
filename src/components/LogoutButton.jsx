import { Link } from "react-router-dom";
// import icon from "../img/cart-placeholder.png";

const LogoutButton = () => {
    return (
        <Link to={"/login/"}>
            {/* <img src={icon} alt="shopping-cart-icon" /> */}
        </Link>
    );
};

export default LogoutButton;
