import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BackendClient from "../../backend-client";

const ProductDetailPage = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        const backend = new BackendClient();
        backend
            .getProductDetail(id)
            .then((res) => setProductDetail(res.data))
            .catch(console.error);
    }, []);

    if (productDetail === null) {
        return <div />;
    }

    return (
        <div class="product-detail">
            <img src={productDetail.image} alt={productDetail.description} />
            <h3>{productDetail.name}</h3>
            <p>{productDetail.description}</p>
        </div>
    );
};

export default ProductDetailPage;
