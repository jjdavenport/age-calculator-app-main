const Output = ({ day, month, year }) => {
  return (
    <>
      <ul className="flex flex-col gap-4 text-5xl font-extrabold">
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
