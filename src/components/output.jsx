const Output = ({ day, month, year }) => {
  return (
    <>
      <ul className="flex flex-col gap-4 font-extrabold ~sm/md:~text-5xl/8xl">
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

export default Output;
