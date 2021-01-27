import { useState, useCallback } from "react";
import BackendClient from "../../backend-client";
import useHandleForm from "../../CustomHooks/CustomHooks";
import "./RegisterPage.css";

const RegisterPage = () => {
    const { handleSubmit, handleInputChange, userInputs } = useHandleForm();
    const backend = useMemo(() => new BackendClient(), []);
    // const [checkout, setCheckout] = useState(false);
    // const [error, setError] = useState(undefined);

    return (
        <div className="register-form-container">
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
                <label>email</label>
                <input
                    onChange={handleInputChange}
                    value={userInputs.streetName}
                    name="email"
                    placeholder="email"
                    type="email"
                    required
                />
                <label>password</label>
                <input
                    onChange={handleInputChange}
                    value={userInputs.houseNumber}
                    name="password"
                    placeholder="password"
                    type="password"
                    required
                />
                <button className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default RegisterPage;
