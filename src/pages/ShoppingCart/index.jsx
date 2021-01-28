import { useContext, useState } from "react";
import { ShopContext } from "../../App";
import ProductTable from "./ProductTable";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";
// import orderContext from "./ProductTable";

const ShoppingCart = () => {
    const context = {
        ...useContext(ShopContext),
    };

    return (
        <>
            {Object.keys(context.cartItems).length === 0 ? (
                <h1>Shopping cart is empty</h1>
            ) : (
                <div className="shopping-cart-summary">
                    <h1>Products in your cart:</h1>
                    <div>
                        <ProductTable
                            className="product-table"
                            productQuantities={context.cartItems}
                        />
                    </div>
                    {/* <orderContext.Provider> */}
                    <Link
                        to={"/shopping-cart/checkout"}
                        subtotal={context.subtotal}
                    >
                        <button className="checkout-button">To checkout</button>
                    </Link>
                    {/* </orderContext.Provider> */}
                </div>
            )}
        </>
    );
};
export default ShoppingCart;
