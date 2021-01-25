import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { ShopContext } from "../../App";
import BackendClient from "../../backend-client";

const ProductDetailPage = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);
    const context = useContext(ShopContext);

    useEffect(() => {
        const backend = new BackendClient();
        backend
            .getProductDetail(id)
            .then((res) => setProductDetail(res.data))
            .catch(console.error);
    }, [id]);

    if (productDetail === null) {
        return <div />;
    }

    return (
        <div class="product-detail">
            <img src={productDetail.image} alt={productDetail.description} />
            <h3>{productDetail.name}</h3>
            <p>{productDetail.description}</p>
            <button onClick={() => context.removeItem(productDetail.id)}>
                -
            </button>
            <button onClick={() => context.addItem(productDetail.id)}>+</button>
        </div>
    );
};

export default ProductDetailPage;
