import InputField from "./InputField";

export default function UserInput({ userInput, handleChange }) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
        userInput;

    return (
        <section id="user-input">
            <div className="input-group">
                <InputField
                    label="Initial Investment"
                    name="initialInvestment"
                    value={initialInvestment}
                    handleChange={handleChange}
                />
                <InputField
                    label="Annual Investment"
                    name="annualInvestment"
                    value={annualInvestment}
                    handleChange={handleChange}
                />
            </div>

            <div className="input-group">
                <InputField
                    label="Expected Return"
                    name="expectedReturn"
                    value={expectedReturn}
                    handleChange={handleChange}
                />
                <InputField
                    label="Duration"
                    name="duration"
                    value={duration}
                    handleChange={handleChange}
                />
            </div>
        </section>
    );
}
