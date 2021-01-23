import { createContext, useCallback, useState } from "react";
import "./App.css";

export const ShopContext = createContext({
    cartItems: [],
    addItem: null,
    clearItems: null,
});

function App(props) {
    const { children } = props;
    const [shoppingCartItems, setShoppingCartItems] = useState([]);
    const addCartItem = useCallback(
        (id) => setShoppingCartItems([...shoppingCartItems, id]),
        [shoppingCartItems, setShoppingCartItems]
    );

    console.log("cart items", shoppingCartItems);
    return (
        <div className="App">
            <ShopContext.Provider
                value={{
                    cartItems: shoppingCartItems,
                    addItem: addCartItem,
                    clearItems: () => setShoppingCartItems([]),
                }}
            >
                <header className="App-header" />
                <main>
                    <div className="main-content">{children}</div>
                </main>
            </ShopContext.Provider>
        </div>
    );
}

export default App;
