import arrow from "./assets/icon-arrow.svg";

const Button = () => {
  return (
    <>
      <button className="bg-black" type="submit">
        <img src={arrow} />
      </button>
    </>
  );
};

export default Button;
