const Output = ({ day, month, year }) => {
  return (
    <>
      <ul>
        <li>{day()}</li>
        <li>{month()}</li>
        <li>{year()}</li>
      </ul>
    </>
  );
};

export default Output;
