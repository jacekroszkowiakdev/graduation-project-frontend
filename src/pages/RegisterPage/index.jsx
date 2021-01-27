import { useState, useCallback, useMemo } from "react";
import BackendClient from "../../backend-client";
import useHandleForm from "../../CustomHooks/CustomHooks";
import "./RegisterPage.css";

const RegisterPage = () => {
    const { handleSubmit, handleInputChange, userInputs } = useHandleForm();
    const backend = useMemo(() => new BackendClient(), []);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="register-form-container">
            <h4>
                Purchase is only allowed for registered users. Please provide
                the following to register your user account
            </h4>
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
                    name="last name"
                    type="text"
                    required
                />
                <label>email</label>
                <input
                    onChange={handleInputChange}
                    value={userInputs.streetName}
                    name="email"
                    type="email"
                    required
                />
                <label>password</label>
                <input
                    onChange={handleInputChange}
                    value={userInputs.houseNumber}
                    name="password"
                    type="password"
                    required
                />
                <button className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default RegisterPage;
