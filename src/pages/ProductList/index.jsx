import { useState, useEffect } from "react";
import BackendClient from "../../backend-client";
import Product from "./Product";
import "./ProductList.css";

const ProductList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const backend = new BackendClient();
        backend
            .loadProducts()
            .then((res) => {
                return setProductList(res.data);
            })
            .catch((err) => {
                console.log(
                    "something went wrong, please reload the page",
                    err
                );
            });
    }, []);

    return (
        <>
            <div className="product-list">
                <ul>
                    {productList.map((product, index) => (
                        <Product
                            key={product.id}
                            index={index}
                            product={product}
                            detailUrl={`/product/${product.id}`}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ProductList;
