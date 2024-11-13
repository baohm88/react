import { useState } from "react";

export function useInvestmentInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(name, value) {
        setUserInput((prevInput) => ({
            ...prevInput,
            [name]: +value,
        }));
    }

    const inputIsValid = userInput.duration >= 1;

    return { userInput, handleChange, inputIsValid };
}