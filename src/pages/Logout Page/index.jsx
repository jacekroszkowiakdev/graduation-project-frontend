import { useState, useCallback } from "react";
import BackendClient from "../../backend-client";
import useHandleForm from "../../CustomHooks/CustomHooks";
import "./LogoutPage.css";

const LogoutPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const logout = useCallback(() => {
        return (setIsLoggedIn = false);
    });
};

export default LogoutPage;
