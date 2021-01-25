import { useEffect, useState } from "react";
import BackendClient from "../../backend-client";
import { useContext } from "react";
import { ShopContext } from "../../App";

const ProductTable = ({ productQuantities }) => {
    const [productDetails, setProductDetails] = useState([]);
    const context = useContext(ShopContext);
    // useEffect(
    //     () =>
    //         Object.keys(productQuantities).map((id) => {
    //             const backend = new BackendClient();
    //             return backend
    //                 .getProductDetail(id)
    //                 .then((res) =>
    //                     setProductDetails([...productDetails, res.data])
    //                 );
    //         }),

    //     [productQuantities, setProductDetails]
    // );
    // console.log("productQuantities:", productQuantities);
    // console.log("Product details", productDetails);

    useEffect(() => {
        Object.keys(productQuantities).map(async (id) => {
            const backend = new BackendClient();
            try {
                const res = await backend.getProductDetail(id);
                setProductDetails([res.data]);
            } catch (err) {
                console.log("/api/product/:id", err);
            }
        });
    }, [productQuantities, setProductDetails]);

    return (
        <table>
            <thead>
                <tr>
                    <th>Product name</th>
                    <th>Quantity</th>
                    <th>Unit price</th>
                    <th>total price</th>
                </tr>
            </thead>
            <tbody>
                {productDetails.map((product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{productQuantities[product.id]}</td>
                        <td>{product.price}</td>
                        <td>{productQuantities[product.id] * product.price}</td>
                        <td>
                            <button
                                onClick={() => context.removeItem(product.id)}
                            >
                                -
                            </button>
                            <button onClick={() => context.addItem(product.id)}>
                                +
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot></tfoot>
        </table>
    );
};

export default ProductTable;
