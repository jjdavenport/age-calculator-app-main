import { useState } from "react";
import Cleave from "cleave.js/react";

const Input = ({ placeholder, label, options }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    const year = new Date().getFullYear();
    const inputNumber = parseInt(input, 10);

    if (input === "") {
      setError("This field is required");
    } else if (placeholder === "DD" && (inputNumber < 1 || inputNumber > 31)) {
      setError("Must be a valid day");
    } else if (placeholder === "MM" && (inputNumber < 1 || inputNumber > 12)) {
      setError("Must be a valid month");
    } else if (placeholder === "YYYY" && inputNumber > year) {
      setError("Must be in the past");
    } else if (
      (placeholder === "DD" || placeholder === "MM") &&
      input.length < 2
    ) {
      setError("Must be two digits");
    } else if (placeholder === "YYYY" && input.length < 4) {
      setError("Must be four digits");
    } else {
      setError("");
    }
  };

  return (
    <>
      <label className="flex flex-col gap-1 font-bold uppercase tracking-widest text-smokeyGrey ~text-sm/base">
        {label}
        <Cleave
          className="flex w-full cursor-pointer rounded-md p-2 text-xl text-offBlack outline outline-1 outline-lightGrey duration-300 ease-in-out placeholder:text-smokeyGrey focus:outline-purple"
          onBlur={validate}
          onChange={(e) => setInput(e.target.rawValue)}
          placeholder={placeholder}
          options={options}
        />
      </label>
      {error && (
        <em className="font-normal lowercase tracking-normal text-lightRed ~text-xs/sm">
          {error}
        </em>
      )}
    </>
  );
};

export default Input;
