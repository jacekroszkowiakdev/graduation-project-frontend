import { useState, useCallback } from "react";
import BackendClient from "../../backend-client";
import "./LoginPage.css";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        const backend = new BackendClient();
        backend
            .login(username, password)
            .then((res) => setIsLoggedIn(res.data.status))
            .catch((err) => {
                console.log("something went wrong, please try again");
            });
    }, [username, password]);

    return <div />;
};

export default LoginPage;
