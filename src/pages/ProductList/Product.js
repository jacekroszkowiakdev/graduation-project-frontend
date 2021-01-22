const Product = ({ product, index }) => {
    return (
        <li>
            <img src={product.image} alt={product.description} />
            <p>{product.name}</p>
        </li>
    );
};

export default Product;
