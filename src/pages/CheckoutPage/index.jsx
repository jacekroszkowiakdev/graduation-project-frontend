import PayPal from "../../components/PayPal";
import BackendClient from "../../backend-client";
import { useContext, useCallback, useState, useMemo } from "react";
import useHandleForm from "../../CustomHooks/CustomHooks";
// import orderContext from "./ShoppingCart/ProductTable";

const CheckoutPage = (props) => {
    const { handleSubmit, handleInputChange, userInputs } = useHandleForm();
    const backend = useMemo(() => new BackendClient(), []);
    // const context = useContext(orderContext);
    const address = userInputs;
    console.log("address", address);
    // console.log("context productsCalculated: ", context.subtotal);

    return (
        <div className="order-submit-container">
            <h3>Please fill in your shipping address:</h3>
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
                    name="last"
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
                    name="PostCode"
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
            {/* {address && <PayPal className="payment-buttons" />} */}
            {/* <PayPal className="payment-buttons" /> */}
        </div>
    );
};

export default CheckoutPage;
