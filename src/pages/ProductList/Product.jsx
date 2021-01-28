import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../App";

const Product = ({ product, index, detailUrl }) => {
    const context = useContext(ShopContext);
    console.log(context);
    return (
        <li>
            <button onClick={() => context.addItem(product.id)}>
                Add To Cart
            </button>
            <Link to={detailUrl}>
                <img src={product.image} alt={product.description} />
            </Link>
            <h5 className="display-name">{product.name}</h5>
        </li>
    );
};

export default Product;
