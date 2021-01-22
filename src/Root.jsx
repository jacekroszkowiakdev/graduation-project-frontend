import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import LoginPage from "./pages/LoginPage";

const Root = () => {
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/" exact component={ProductList} />
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </App>
        </BrowserRouter>
    );
};

export default Root;
