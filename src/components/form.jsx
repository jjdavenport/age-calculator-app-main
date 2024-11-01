import Input from "./input";

const Form = ({ onSubmit }) => {
  const validateForm = () => {
    onSubmit();
  };

  return (
    <form onSubmit={validateForm}>
      <ul className="flex flex-row justify-between gap-4">
        <li className="flex flex-col gap-2">
          <Input
            options={{ date: true, datePattern: ["d"] }}
            label="Day"
            placeholder="DD"
          />
        </li>
        <li className="flex flex-col gap-2">
          <Input
            options={{ date: true, datePattern: ["m"] }}
            label="Month"
            placeholder="MM"
          />
        </li>
        <li className="flex flex-col gap-2">
          <Input
            options={{ date: true, datePattern: ["Y"] }}
            label="Year"
            placeholder="YYYY"
          />
        </li>
      </ul>
    </form>
  );
};

export default Form;
