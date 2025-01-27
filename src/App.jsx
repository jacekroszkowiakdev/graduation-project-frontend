import { createContext, useCallback, useState } from "react";
import "./App.css";
import CartButton from "./components/CartButton";
import AccountButton from "./components/AccountButton";
import { Button } from "@material-ui/core";

export const ShopContext = createContext({
    cartItems: {},
    addItem: null,
    clearItems: null,
});

function App(props) {
    const { children } = props;
    const [shoppingCartItems, setShoppingCartItems] = useState({});

    const addCartItem = useCallback(
        (id) => {
            if (shoppingCartItems[id] === undefined)
                setShoppingCartItems({ ...shoppingCartItems, [id]: 1 });
            else {
                setShoppingCartItems({
                    ...shoppingCartItems,
                    [id]: shoppingCartItems[id] + 1,
                });
            }
        },

        [shoppingCartItems, setShoppingCartItems]
    );

    const removeCartItem = useCallback(
        (id) => {
            if (shoppingCartItems[id] === 0) {
                return;
            } else {
                setShoppingCartItems({
                    ...shoppingCartItems,
                    [id]: shoppingCartItems[id] - 1,
                });
            }
        },
        [shoppingCartItems, setShoppingCartItems]
    );

    return (
        <div className="App">
            <ShopContext.Provider
                value={{
                    cartItems: shoppingCartItems,
                    addItem: addCartItem,
                    removeItem: removeCartItem,
                    clearItems: () => setShoppingCartItems({}),
                }}
            >
                <header className="App-header">
                    <CartButton className="cart-button" />
                    <div className="cart-counter">
                        {Object.keys(shoppingCartItems).length > 0 &&
                            Object.keys(shoppingCartItems).length}
                    </div>
                    <AccountButton className="account-button" />
                </header>
                <main>
                    <div className="main-content">{children}</div>
                </main>
            </ShopContext.Provider>
        </div>
    );
}

export default App;
