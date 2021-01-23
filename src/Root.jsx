import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const Root = () => {
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/" exact component={ProductList} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/product/:id" component={ProductDetailPage} />
                </Switch>
            </App>
        </BrowserRouter>
    );
};

export default Root;
