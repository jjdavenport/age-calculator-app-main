import arrow from "../assets/icon-arrow.svg";
import {
  useEffect,
  useState,
  type ReactNode,
  type SetStateAction,
} from "react";

const Button = () => {
  return (
    <div className="absolute bottom-0 w-full">
      <div className="relative w-full">
        <button
          type="submit"
          className="group bg-purple absolute -bottom-8 left-1/2 w-fit -translate-x-1/2 cursor-pointer overflow-hidden rounded-full p-4 transition-transform duration-300 md:right-0 md:-bottom-12 md:left-auto md:translate-x-0 md:p-6"
        >
          <div className="absolute inset-0 z-0 rounded-full bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
          <img className="relative w-7 object-contain md:w-12" src={arrow} />
        </button>
      </div>
    </div>
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

const Form = ({
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

    const startValue = `${values.year}-${values.month.toString().padStart(2, "0")}-${values.day.toString().padStart(2, "0")}`;

    const date = new Date();

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const endValue = `${year}-${month}-${day}`;

    const startDays = new Date(startValue);
    const endDays = new Date(endValue);

    const diff = startDays.getTime() - endDays.getTime();

    const milliseconds = 1000 * 60 * 60 * 24;

    const result = Math.round(diff / milliseconds);

    const years = Math.abs(result / 365).toFixed(0);
    const addYears = result % 365;
    const months = Math.abs(addYears / 30).toFixed(0);
    const days = Math.abs(addYears % 30).toFixed(0);

    const error: Partial<{ day: string; month: string; year: string }> = {};

    if (values.day === "") {
      error.day = "Cannot be empty";
    } else if (values.day.length > 2) {
      error.day = "Must be one or two digits";
    } else if (+values.day < 1 || +values.day > 31) {
      error.day = "Must be a valid day";
    } else if (!values.day.match(/^\d+$/)) {
      error.day = "Must be a number";
    }

    if (values.month === "") {
      error.month = "Cannot be empty";
    } else if (values.month.length > 2) {
      error.month = "Must be one or two digits";
    } else if (+values.month < 1 || +values.month > 12) {
      error.month = "Must be a valid month";
    } else if (!values.month.match(/^\d+$/)) {
      error.month = "Must be a number";
    }

    if (values.year === "") {
      error.year = "Cannot be empty";
    } else if (values.year.length > 4) {
      error.year = "Must be four digits";
    } else if (+values.year > year) {
      error.year = "Must be in the past";
    } else if (!values.year.match(/^\d+$/)) {
      error.year = "Must be a number";
    }

    if (+values.year === year) {
      if (+values.month > date.getMonth() + 1) {
        error.month = "Must be in the past";
      } else if (
        +values.month === date.getMonth() + 1 &&
        +values.day > date.getDate()
      ) {
        error.day = "Must be in the past";
      }
    } else if (+values.year > year) {
      error.year = "Must be in the past";
    }

    if (Object.keys(error).length > 0) {
      setErrors((prev) => ({ ...prev, ...error }));
      return;
    }

    setErrors({ day: "", month: "", year: "" });

    setResults({ days: days, months: months, years: years });
  };

  return (
    <form
      className="border-b-lightGrey relative flex h-52 flex-col justify-center border-b"
      noValidate
      onSubmit={onSubmit}
    >
      <ul className="flex flex-row justify-between gap-5 md:w-10/12">
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
      </ul>
      <Button />
    </form>
  );
};

const Input = ({
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
      value.length > 2
    ) {
      setError("Must be two digits or less");
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
      <li className="flex flex-col gap-1 md:gap-2">
        <label
          className={`${error !== "" ? "text-lightRed" : "text-smokeyGrey"} flex flex-col text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-300 ease-in-out`}
        >
          {label}
        </label>
        <input
          value={value}
          className={` ${error !== "" ? "outline-lightRed" : "outline-lightGrey focus:outline-purple"} text-offBlack placeholder:text-smokeyGrey md:text-custom flex w-full cursor-pointer rounded-md p-3 text-lg font-extrabold outline-1 duration-300 ease-in-out`}
          onBlur={validate}
          onChange={onChange}
          placeholder={placeholder}
        />
        <em
          className={
            "text-lightRed h-1 text-xs font-normal tracking-normal normal-case transition-colors duration-300 ease-in-out"
          }
        >
          {error}
        </em>
      </li>
    </>
  );
};

const Output = ({
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
      <ul className="flex h-[18rem] flex-col justify-center text-[3rem] leading-tight font-extrabold md:h-96 md:text-[5rem]">
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

export const Main = ({
  results,
  setResults,
}: {
  results: { days: string; months: string; years: string };
  setResults: React.Dispatch<
    SetStateAction<{ days: string; months: string; years: string }>
  >;
}) => {
  return (
    <>
      <main className="flex max-w-screen-md flex-col rounded-t-2xl rounded-br-[6rem] rounded-bl-2xl bg-white px-6 md:px-10">
        <Form setResults={setResults} />
        <Output
          days={results.days}
          months={results.months}
          years={results.years}
        />
      </main>
    </>
  );
};

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="bg-offWhite font-custom md:text-custom flex h-full min-h-screen flex-col items-center justify-center font-normal">
        {children}
      </div>
    </>
  );
};

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center p-4 lg:px-0 lg:py-4">
        {children}
      </div>
    </>
  );
};
