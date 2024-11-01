import { useState } from "react";

const Input = ({ type, placeholder, label }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    const year = new Date().getFullYear();
    if (input === "") {
      setError("This field is required");
    } else if (placeholder === "DD" && (input < 1 || input > 31)) {
      setError("Must be a valid day");
    } else if (placeholder === "MM" && (input < 1 || input > 12)) {
      setError("Must be a valid month");
    } else if (placeholder === "YYYY" && input > year) {
      setError("Must be in the past");
    } else if (
      (placeholder === "DD" && input.length < 2) ||
      (placeholder === "MM" && input.length < 2)
    ) {
      setError("must be two digits");
    } else if (placeholder === "YYYY" && input.length < 4) {
      setError("Must be four digits");
    } else {
      setError("");
    }
  };

  return (
    <>
      <label className="flex flex-col gap-2">
        {label}
        <input
          type={type}
          onBlur={validate}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
        />
        {error && (
          <>
            <span>{error}</span>
          </>
        )}
      </label>
    </>
  );
};

export default Input;
