import arrow from "./assets/icon-arrow.svg";

const Button = ({ onClick }) => {
  return (
    <>
      <section className="relative flex w-full justify-center md:justify-end">
        <div className="h-[2px] w-full bg-lightGrey"></div>
        <button
          onClick={onClick}
          className="absolute w-fit rounded-full bg-purple transition-colors duration-300 ease-in-out hover:bg-black ~sm/md:~-top-8/11 ~sm/md:~p-4/6"
          type="submit"
        >
          <img className="object-contain ~sm/md:~w-8/10" src={arrow} />
        </button>
      </section>
    </>
  );
};

export default Button;
