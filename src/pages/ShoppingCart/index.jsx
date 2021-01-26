import { useContext, useState } from "react";
import { ShopContext } from "../../App";
import ProductTable from "./ProductTable";
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
                </div>
            )}
        </>
    );
};

export default ShoppingCart;
