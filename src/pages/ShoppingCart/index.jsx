import { useContext } from "react";
import { ShopContext } from "../../App";
import ProductList from "../ProductList";
import "./ShoppingCart.css";

const ShoppingCart = ({ product, index, detailUrl }) => {
    const context = useContext(ShopContext);
    console.log("ShoppingCart element context:", context);

    return (
        <>
            {context.cartItems.length === 0 ? (
                <h1>Shopping cart is empty</h1>
            ) : (
                <div>
                    <h1>Products in your cart:</h1>
                    <ProductList products={context.cartItems} />
                </div>
            )}
        </>
    );
};

export default ShoppingCart;
