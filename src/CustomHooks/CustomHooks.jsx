// in order for React to recognize any custom hooks in our apps, their name should start with “use”:
import { useState } from "react";

const useCheckoutForm = (callback = () => {}) => {
    const [userInputs, setUserInputs] = useState({});
    const handleSubmit = (evt) => {
        if (evt) {
            evt.preventDefault();
        }
        callback();
    };

    const handleInputChange = (evt) => {
        evt.persist();
        setUserInputs((userInputs) => ({
            ...userInputs,
            [evt.target.name]: evt.target.val,
        }));
    };
    return {
        handleSubmit,
        handleInputChange,
        userInputs,
    };
};
export default useCheckoutForm;
