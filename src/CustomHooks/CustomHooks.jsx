// in order for React to recognize any custom hooks in our apps, their name should start with “use”:
import { useState } from "react";

const useHandleForm = (callback = () => {}) => {
    const [userInputs, setUserInputs] = useState({});
    const handleSubmit = (evt) => {
        if (evt) {
            evt.preventDefault();
        }
        callback();
        console.log("handleSubmit fired!");
    };

    const handleInputChange = (evt) => {
        // evt.persist();
        console.log("evt: ", evt.target.value);
        setUserInputs((userInputs) => ({
            ...userInputs,
            [evt.target.name]: evt.target.value,
        }));
        console.log("handleInputChange fired: ", userInputs);
    };
    console.log("userInputs", userInputs);
    return {
        handleSubmit,
        handleInputChange,
        userInputs,
    };
};
export default useHandleForm;
