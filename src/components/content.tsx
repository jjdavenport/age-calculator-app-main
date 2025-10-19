import arrow from "../assets/icon-arrow.svg";
import { useState } from "react";

export const Button = ({ onClick }) => {
  return (
    <>
      <section className="relative flex w-full justify-center md:justify-end">
        <div className="bg-lightGrey h-[2px] w-full"></div>
        <button
          onClick={onClick}
          className="bg-purple absolute w-fit rounded-full transition-colors duration-300 ease-in-out hover:bg-black"
          type="submit"
        >
          <img className="~sm/md:~w-8/10 object-contain" src={arrow} />
        </button>
      </section>
    </>
  );
};

export const Footer = () => {
  return (
    <>
      <footer className="text-center text-xs font-normal">
        <p className="inline">
          Challenge by
          <a
            className="pl-1 underline"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by
          <a className="pl-1 underline" href="https://github.com/jjdavenport">
            jjdavenport
          </a>
          .
        </p>
      </footer>
    </>
  );
};

export const Form = ({ onSubmit }) => {
  const validateForm = () => {
    onSubmit();
  };

  return (
    <form onSubmit={validateForm}>
      <ul className="flex flex-row justify-between md:w-10/12">
        <li className="flex flex-col gap-2">
          <Input
            options={{ date: true, datePattern: ["d"] }}
            label="Day"
            placeholder="DD"
          />
        </li>
        <li className="flex flex-col gap-2">
          <Input
            options={{ date: true, datePattern: ["m"] }}
            label="Month"
            placeholder="MM"
          />
        </li>
        <li className="flex flex-col gap-2">
          <Input
            options={{ date: true, datePattern: ["Y"] }}
            label="Year"
            placeholder="YYYY"
          />
        </li>
      </ul>
    </form>
  );
};

export const Input = ({ placeholder, label, options }) => {
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
        className={`${error ? "text-lightRed" : "text-smokeyGrey"} ~sm/md:~text-sm/lg ~sm/md:~gap-1/2 flex flex-col font-bold tracking-[0.2em] uppercase transition-colors duration-300 ease-in-out`}
      >
        {label}
        <input
          className={` ${error ? "outline-lightRed" : "outline-lightGrey focus:outline-purple"} text-offBlack placeholder:text-smokeyGrey flex w-full cursor-pointer rounded-md outline-1 duration-300 ease-in-out`}
          onBlur={validate}
          onChange={(e) => setInput(e.target.rawValue)}
          placeholder={placeholder}
          options={options}
        />
      </label>
      <em
        className={
          "text-lightRed h-1 font-normal tracking-normal normal-case transition-colors duration-300 ease-in-out"
        }
      >
        {error}
      </em>
    </>
  );
};

export const Output = ({ day, month, year }) => {
  return (
    <>
      <ul className="flex flex-col gap-4 font-extrabold">
        <li className="text-purple">
          <em>
            {year()} <span className="text-offBlack">years </span>
          </em>
        </li>
        <li className="text-purple">
          <em>
            {month()} <span className="text-offBlack">months</span>
          </em>
        </li>
        <li className="text-purple">
          <em>
            {day()} <span className="text-offBlack">days</span>
          </em>
        </li>
      </ul>
    </>
  );
};
