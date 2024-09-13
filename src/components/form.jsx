import Input from "./input";

const Form = ({ data, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <ul>
        {data.map((i, index) => (
          <li key={index}>
            <Input placeholder={i.placeholder} type={i.type} label={i.label} />
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Form;
