import { useEffect, useMemo, useState } from "react";
import BackendClient from "../../backend-client";
import { useContext } from "react";
import { ShopContext } from "../../App";

const ProductTable = ({ productQuantities }) => {
    console.log(productQuantities);
    const [productDetails, setProductDetails] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const context = useContext(ShopContext);
    const backend = useMemo(() => new BackendClient(), []);

    const productsCalculated = useMemo(
        () =>
            productDetails.map((product) => ({
                ...product,
                total: product.price * productQuantities[product.id],
            })),
        [productDetails, productQuantities]
    );

    const subtotal = useMemo(
        () => productsCalculated.reduce((sum, { total }) => (sum += total), 0),
        [productsCalculated]
    );

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                setError(undefined);
                // setLoading(true);
                const promises = Object.keys(productQuantities).map(
                    async (id) => {
                        const res = await backend.getProductDetail(id);
                        return res.data;
                    }
                );
                const details = await Promise.all(promises);
                setProductDetails(details);
                // setLoading(false);
            } catch (err) {
                setError(err);
                console.log("product load unsuccessful: ", err);
                // setLoading(false);
            }
        };
        getProductDetails();
    }, [productQuantities, backend, setProductDetails]);

    return (
        <table>
            <thead>
                <th>Products in your cart:</th>
                <tr>
                    <th>Product name</th>
                    <th>Quantity</th>
                    <th>Unit price</th>
                    <th>Total price</th>
                </tr>
            </thead>
            <tbody>
                {productDetails.map((product, id) => (
                    <tr key={id}>
                        <td>{product.name}</td>
                        <td>
                            <button
                                className="quantities-button"
                                onClick={() => context.removeItem(product.id)}
                            >
                                -
                            </button>
                            {productQuantities[product.id]}
                            <button
                                className="quantities-button"
                                onClick={() => context.addItem(product.id)}
                            >
                                +
                            </button>
                        </td>
                        <td>{product.price.toFixed(2)} €</td>
                        <td>
                            {(
                                product.price * productQuantities[product.id]
                            ).toFixed(2)}{" "}
                            €
                        </td>
                        <td>{product.total}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <hr></hr>
                <tr>
                    <th>subtotal:</th>
                    <td>{subtotal.toFixed(2)} €</td>
                </tr>
            </tfoot>
        </table>
    );
};

export default ProductTable;
