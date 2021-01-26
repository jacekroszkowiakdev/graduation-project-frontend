import PayPal from "../../components/PayPal";
import BackendClient from "../../backend-client";
import { useContext, useState, useMemo } from "react";
import useCheckoutForm from "../../CustomHooks/CustomHooks";
// import { ShopContext } from "../../App";
import "./CheckoutPage.css";

const CheckoutPage = (props) => {
    const [handleSubmit, handleInputChange, userInputs] = useCheckoutForm;
    const backend = useMemo(() => new BackendClient(), []);
    // const [checkout, setCheckout] = useState(false);
    // const [error, setError] = useState(undefined);

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
                <label>Street and house number</label>
                <input
                    onChange={handleInputChange}
                    value={userInputs.streetName}
                    name="street name"
                    placeholder="street name"
                    type="text"
                    required
                />
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
            <PayPal />
        </div>
    );
};

export default CheckoutPage;
