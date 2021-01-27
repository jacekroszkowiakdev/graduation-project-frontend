import PayPal from "../../components/PayPal";
import BackendClient from "../../backend-client";
import { useContext, useState, useMemo } from "react";
import useHandleForm from "../../CustomHooks/CustomHooks";
// import { ShopContext } from "../../App";
import "./CheckoutPage.css";

const CheckoutPage = (props) => {
    const { handleSubmit, handleInputChange, userInputs } = useHandleForm();
    const backend = useMemo(() => new BackendClient(), []);
    const address = false;
    // const [checkout, setCheckout] = useState(false);
    // const [error, setError] = useState(undefined);

    // const addCartItem = useCallback(
    //     (id) => {
    //         if (shoppingCartItems[id] === undefined)
    //             setShoppingCartItems({ ...shoppingCartItems, [id]: 1 });
    //         else {
    //             setShoppingCartItems({
    //                 ...shoppingCartItems,
    //                 [id]: shoppingCartItems[id] + 1,
    //             });
    //         }
    //     },

    //     [shoppingCartItems, setShoppingCartItems]
    // );
    // useCallback:

    return (
        <div className="order-submit-container">
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input
                    onChange={handleInputChange}
                    value={userInputs.firstName}
                    name="first"
                    placeholder="first name"
                    type="text"
                    required
                />
                <label>Last Name</label>
                <input
                    onChange={handleInputChange}
                    value={userInputs.lastName}
                    placeholder="last name"
                    type="text"
                    required
                />
                <label>Street</label>
                <input
                    onChange={handleInputChange}
                    value={userInputs.streetName}
                    name="street name"
                    placeholder="street name"
                    type="text"
                    required
                />
                <label>House number</label>
                <input
                    onChange={handleInputChange}
                    value={userInputs.houseNumber}
                    name="house number"
                    placeholder="house number"
                    type="number"
                    required
                />
                <label>Extension (optional)</label>
                <input
                    onChange={handleInputChange}
                    value={userInputs.extension}
                    name="extension"
                    placeholder="extension"
                    type="text"
                />
                <label>PostCode</label>
                <input
                    onChange={handleInputChange}
                    value={userInputs.postCode}
                    placeholder="post code"
                    type="number"
                    required
                />
                <label>City</label>
                <input
                    onChange={handleInputChange}
                    value={userInputs.city}
                    name="city"
                    placeholder="city"
                    type="text"
                    required
                />

                <button className="submit-button">Submit</button>
            </form>
            {address && <PayPal className="payment-buttons" />}
        </div>
    );
};

export default CheckoutPage;
