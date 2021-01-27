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
        evt.persist();
        setUserInputs((userInputs) => ({
            ...userInputs,
            [evt.target.name]: evt.target.val,
        }));
        console.log("handleInputChange fired: ", userInputs);
    };
    return {
        handleSubmit,
        handleInputChange,
        userInputs,
    };
};
export default useHandleForm;
