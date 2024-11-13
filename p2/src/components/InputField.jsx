export default function InputField({
    label,
    name,
    value,
    handleChange,
    type = "number",
}) {
    return (
        <p>
            <label>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={(e) => handleChange(name, e.target.value)}
                required
            />
        </p>
    );
}
