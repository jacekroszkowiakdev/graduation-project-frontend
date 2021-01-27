import { Link } from "react-router-dom";
import icon from "../img/cart-placeholder.png";

const CartButton = () => {
    return (
        <div className="shopping-cart-button">
            <Link to={"/shopping-cart/"}>
                <img src={icon} alt="shopping-cart-icon" />
            </Link>
        </div>
    );
};

export default CartButton;
