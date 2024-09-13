const Output = ({ data }) => {
  return (
    <>
      <ul>
        {data.map((i, index) => (
          <li key={index}>
            <span>{i.label}</span>
            <span>{i.default}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Output;
