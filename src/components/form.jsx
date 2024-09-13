import Input from "./input";

const Form = ({ data }) => {
  const submit = (e) => {
    e.preventDefault;
  };

  return (
    <>
      <form onSubmit={submit}>
        {data.map((i, index) => (
          <>
            <Input
              key={index}
              placeholder={i.placeholder}
              type={i.type}
              label={i.label}
            />
          </>
        ))}
      </form>
    </>
  );
};

export default Form;
