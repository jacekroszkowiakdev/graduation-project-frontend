import { useContext, useState } from "react";
import { ShopContext } from "../../App";
import ProductTable from "./ProductTable";
import { Link } from "react-router-dom";
// import checkoutButton from "../img/cart-placeholder.png";
import "./ShoppingCart.css";

const ShoppingCart = () => {
    const context = {
        ...useContext(ShopContext),
    };

    return (
        <>
            {Object.keys(context.cartItems).length === 0 ? (
                <h1>Shopping cart is empty</h1>
            ) : (
                <div>
                    <h1>Products in your cart:</h1>
                    <ProductTable productQuantities={context.cartItems} />
                    <div className="checkout-button">
                        <Link to={"/shopping-cart/checkout"}>To checkout</Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default ShoppingCart;
