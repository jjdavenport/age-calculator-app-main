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
      <label
        className={`${error ? "text-lightRed" : "text-smokeyGrey"} flex flex-col font-bold uppercase tracking-[0.2em] transition-colors duration-300 ease-in-out ~sm/md:~text-sm/lg ~sm/md:~gap-1/2`}
      >
        {label}
        <Cleave
          className={` ${error ? "outline-lightRed" : "outline-lightGrey focus:outline-purple"} flex w-full cursor-pointer rounded-md text-offBlack outline outline-1 duration-300 ease-in-out placeholder:text-smokeyGrey ~sm/md:~text-xl/custom ~sm/md:~px-2/5 ~sm/md:~py-2/3`}
          onBlur={validate}
          onChange={(e) => setInput(e.target.rawValue)}
          placeholder={placeholder}
          options={options}
        />
      </label>
      <em
        className={
          "~sm/md:~text-mobile/base h-1 font-normal normal-case tracking-normal text-lightRed transition-colors duration-300 ease-in-out"
        }
      >
        {error}
      </em>
    </>
  );
};

export default Input;
