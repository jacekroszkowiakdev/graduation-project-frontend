import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShoppingCart from "./pages/ShoppingCart";
import CheckoutPage from "./pages/CheckoutPage";

const Root = () => {
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/" exact component={ProductList} />
                    <Route path="/login/" component={LoginPage} />
                    <Route path="/product/:id/" component={ProductDetailPage} />
                    <Route
                        path="/shopping-cart/checkout"
                        component={CheckoutPage}
                    />
                    <Route path="/shopping-cart/" component={ShoppingCart} />
                </Switch>
            </App>
        </BrowserRouter>
    );
};

export default Root;
