import arrow from "../assets/icon-arrow.svg";
import { useState } from "react";

export const Button = () => {
  return (
    <>
      <section className="absolute bottom-4 flex w-full translate-y-1/2 justify-center md:justify-end">
        <button
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

export const Form = ({
  setResults,
}: {
  setResults: React.Dispatch<
    React.SetStateAction<{ days: string; months: string; years: string }>
  >;
}) => {
  const [values, setValues] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [errors, setErrors] = useState({
    day: "",
    month: "",
    year: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const date = new Date();
    const year = date.getFullYear();

    console.log(year);

    const error: Partial<{ day: string; month: string; year: string }> = {};

    if (values.day === "") {
      error.day = "Cannot be empty";
    } else if (values.day.length > 2) {
      error.day = "Must be one or two digits";
    } else if (+values.day < 1 || +values.day > 31) {
      error.day = "Must be a number between one and thirty one";
    } else if (!values.day.match(/^\d+$/)) {
      error.day = "Must be a number";
    }

    if (values.month === "") {
      error.month = "Cannot be empty";
    } else if (values.month.length > 2) {
      error.month = "Must be one or two digits";
    } else if (+values.month < 1 || +values.month > 12) {
      error.month = "Must be a number between one and twelve";
    } else if (!values.month.match(/^\d+$/)) {
      error.month = "Must be a number";
    }

    if (values.year === "") {
      error.year = "Cannot be empty";
    } else if (values.year.length > 4) {
      error.year = "Must be four digits";
    } else if (+values.year > year) {
      error.year = "Must be this year or previous years";
    } else if (!values.year.match(/^\d+$/)) {
      errors.year = "Must be a number";
    }

    if (Object.keys(error).length > 0) {
      setErrors((prev) => ({ ...prev, ...error }));
      return;
    }

    setErrors({ day: "", month: "", year: "" });

    setResults({ days: "", months: "", years: "" });
  };

  return (
    <form
      className="border-b-lightGrey relative h-96 border-b"
      noValidate
      onSubmit={onSubmit}
    >
      <ul className="flex flex-row justify-between md:w-10/12">
        <li className="flex flex-col gap-2">
          <Input
            onChange={(e) =>
              setValues((prev) => ({ ...prev, day: e.target.value }))
            }
            setError={(value: string) =>
              setErrors((prev) => ({ ...prev, day: value }))
            }
            error={errors.day}
            value={values.day}
            label="Day"
            placeholder="DD"
          />
        </li>
        <li className="flex flex-col gap-2">
          <Input
            onChange={(e) =>
              setValues((prev) => ({ ...prev, month: e.target.value }))
            }
            setError={(value: string) =>
              setErrors((prev) => ({ ...prev, month: value }))
            }
            error={errors.month}
            value={values.month}
            label="Month"
            placeholder="MM"
          />
        </li>
        <li className="flex flex-col gap-2">
          <Input
            onChange={(e) =>
              setValues((prev) => ({ ...prev, year: e.target.value }))
            }
            setError={(value: string) =>
              setErrors((prev) => ({ ...prev, year: value }))
            }
            error={errors.year}
            value={values.year}
            label="Year"
            placeholder="YYYY"
          />
        </li>
      </ul>
      <Button />
    </form>
  );
};

export const Input = ({
  placeholder,
  label,
  value,
  onChange,
  error,
  setError,
}: {
  placeholder: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  setError: (value: string) => void;
}) => {
  const validate = () => {
    const year = new Date().getFullYear();
    const inputNumber = parseInt(value, 10);

    if (value === "") {
      setError("This field is required");
    } else if (placeholder === "DD" && (inputNumber < 1 || inputNumber > 31)) {
      setError("Must be a valid day");
    } else if (placeholder === "MM" && (inputNumber < 1 || inputNumber > 12)) {
      setError("Must be a valid month");
    } else if (placeholder === "YYYY" && inputNumber > year) {
      setError("Must be in the past");
    } else if (
      (placeholder === "DD" || placeholder === "MM") &&
      value.length < 2
    ) {
      setError("Must be two digits");
    } else if (placeholder === "YYYY" && value.length < 4) {
      setError("Must be four digits");
    } else if (!value.match(/^\d+$/)) {
      setError("Must be a number");
    } else {
      setError("");
    }
  };

  return (
    <>
      <label
        className={`${error !== "" ? "text-lightRed" : "text-smokeyGrey"} ~sm/md:~text-sm/lg ~sm/md:~gap-1/2 flex flex-col font-bold tracking-[0.2em] uppercase transition-colors duration-300 ease-in-out`}
      >
        {label}
        <input
          value={value}
          className={` ${error !== "" ? "outline-lightRed" : "outline-lightGrey focus:outline-purple"} text-offBlack placeholder:text-smokeyGrey flex w-full cursor-pointer rounded-md outline-1 duration-300 ease-in-out`}
          onBlur={validate}
          onChange={onChange}
          placeholder={placeholder}
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

export const Output = ({
  days,
  months,
  years,
}: {
  days: string;
  months: string;
  years: string;
}) => {
  return (
    <>
      <ul className="flex flex-col gap-4 font-extrabold">
        <li className="text-purple">
          <em>
            {years} <span className="text-offBlack">years </span>
          </em>
        </li>
        <li className="text-purple">
          <em>
            {months} <span className="text-offBlack">months</span>
          </em>
        </li>
        <li className="text-purple">
          <em>
            {days} <span className="text-offBlack">days</span>
          </em>
        </li>
      </ul>
    </>
  );
};
