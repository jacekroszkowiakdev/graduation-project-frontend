import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { ShopContext } from "../../App";
import BackendClient from "../../backend-client";
import "./ProductDetailPage.css";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { sizing } from "@material-ui/system";

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

            <Button
                variant="outlined"
                onClick={() => context.addItem(productDetail.id)}
            >
                Add to cart
            </Button>
        </div>
    );
};

export default ProductDetailPage;
