import { useState, useCallback } from "react";
import BackendClient from "../../backend-client";
import useHandleForm from "../../CustomHooks/CustomHooks";
import "./LoginPage.css";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { handleSubmit, handleInputChange, userInputs } = useHandleForm();

    const login = useCallback(() => {
        const backend = new BackendClient();
        backend
            .login(username, password)
            .then((res) => setIsLoggedIn(res.data.status))
            .catch((err) => {
                console.log("something went wrong, please try again", err);
            });
    }, [username, password]);

    return (
        <div className="login-container">
            <h1>Log in with your email</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        placeholder="email"
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                        value={userInputs.email}
                        required
                    />
                </div>
                <div>
                    <input
                        placeholder="password"
                        type="password"
                        name="password"
                        onChange={handleInputChange}
                        value={userInputs.password}
                    />
                </div>
            </form>
            <button className="sign-up-button">Sign Up</button>
        </div>
    );
};

export default LoginPage;
