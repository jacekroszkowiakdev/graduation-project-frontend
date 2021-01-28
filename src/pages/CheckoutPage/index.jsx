import PayPal from "../../components/PayPal";
import BackendClient from "../../backend-client";
import { useCallback, useState, useMemo } from "react";
import useHandleForm from "../../CustomHooks/CustomHooks";
// import orderContext from "./ShoppingCart/ProductTable";

const CheckoutPage = (props) => {
    const { handleSubmit, handleInputChange, userInputs } = useHandleForm();
    const backend = useMemo(() => new BackendClient(), []);
    const [address, setAddress] = useState({});
    const [addressProvided, setAddressProvided] = useState(false);

    const setRecipentAddress = useCallback(() => {
        setAddress(userInputs);
        setAddressProvided(true);
        console.log("address:", address);
    });
    //     console.log("handle click fired", this.state);
    //     axios.post("/api/order", this.state)
    //     .then(console.log(run paypal))
    // }

    // const login = useCallback(() => {
    //     const backend = new BackendClient();
    //     backend
    //         .login(username, password)
    //         .then((res) => setIsLoggedIn(res.data.status))
    //         .catch((err) => {
    //             console.log("something went wrong, please try again", err);
    //         });
    // }, [username, password]);

    return (
        <div>
            {!addressProvided && (
                <div className="order-submit-container">
                    <h3>Please fill in your shipping address:</h3>
                    <form onSubmit={handleSubmit}>
                        <label>First Name</label>
                        <input
                            onChange={handleInputChange}
                            value={userInputs.firstName}
                            name="first"
                            type="text"
                            required
                        />
                        <label>Last Name</label>
                        <input
                            onChange={handleInputChange}
                            value={userInputs.lastName}
                            name="last"
                            type="text"
                            required
                        />
                        <label>Street</label>
                        <input
                            onChange={handleInputChange}
                            value={userInputs.streetName}
                            name="street name"
                            type="text"
                            required
                        />
                        <label>House number</label>
                        <input
                            onChange={handleInputChange}
                            value={userInputs.houseNumber}
                            name="house number"
                            type="number"
                            required
                        />
                        <label>Additional information</label>
                        <input
                            onChange={handleInputChange}
                            value={userInputs.extension}
                            name="extension"
                            type="text"
                        />
                        <label>PostCode</label>
                        <input
                            onChange={handleInputChange}
                            value={userInputs.postCode}
                            name="PostCode"
                            type="number"
                            required
                        />
                        <label>City</label>
                        <input
                            onChange={handleInputChange}
                            value={userInputs.city}
                            name="city"
                            type="text"
                            required
                        />
                        <button
                            className="submit-button"
                            onClick={setRecipentAddress}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}

            {addressProvided && <PayPal className="payment-buttons" />}
            {/* <PayPal className="payment-buttons" /> */}
        </div>
    );
};

export default CheckoutPage;
