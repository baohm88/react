import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useInvestmentInput } from "./hooks/useInvestmentInput";

function App() {
    const { userInput, handleChange, inputIsValid } = useInvestmentInput();

    return (
        <>
            <Header />
            <UserInput userInput={userInput} handleChange={handleChange} />
            {inputIsValid ? (
                <Results input={userInput} />
            ) : (
                <p className="error-message">
                    Please enter a duration greater than 0
                </p>
            )}
        </>
    );
}

export default App;
