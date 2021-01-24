import { Link } from "react-router-dom";
import icon from "../img/cart-placeholder.png";

const CartButton = () => {
    return (
        <Link to={"/shopping-cart/"}>
            <img src={icon} alt="shopping-cart-icon" />
        </Link>
    );
};

export default CartButton;
