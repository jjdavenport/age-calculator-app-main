import arrow from "./assets/icon-arrow.svg";

const Button = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className="bg-black" type="submit">
        <img src={arrow} />
      </button>
    </>
  );
};

export default Button;
