import arrow from "./assets/icon-arrow.svg";

const Button = ({ onClick }) => {
  return (
    <>
      <section className="relative flex w-full justify-center">
        <div className="h-[2px] w-full bg-lightGrey"></div>
        <button
          onClick={onClick}
          className="absolute -top-8 w-fit rounded-full bg-purple p-4 transition-colors duration-300 ease-in-out hover:bg-black"
          type="submit"
        >
          <img className="w-8 object-contain" src={arrow} />
        </button>
      </section>
    </>
  );
};

export default Button;
