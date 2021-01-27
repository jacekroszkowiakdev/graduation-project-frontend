import { useState, useCallback } from "react";
import BackendClient from "../../backend-client";
import useHandleForm from "../../CustomHooks/CustomHooks";
import "./LoginPage.css";

const LogoutPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const logout = useCallback(() => {
        return (setIsLoggedIn = false);
    });
};

export default LogoutPage;
