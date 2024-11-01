import Input from "./input";

const Form = ({ onSubmit }) => {
  const validateForm = () => {
    onSubmit();
  };

  return (
    <form onSubmit={validateForm}>
      <ul className="flex flex-row">
        <li>
          <Input label="Day" type="number" placeholder="00" />
        </li>
        <li>
          <Input label="Month" type="number" placeholder="00" />
        </li>
        <li>
          <Input label="Year" type="number" placeholder="0000" />
        </li>
      </ul>
    </form>
  );
};

export default Form;
