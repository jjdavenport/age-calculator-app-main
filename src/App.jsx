import data from "./components/assets/data.json";
import Form from "./components/form";
import Output from "./components/output";
import Button from "./components/button";

function App() {
  const submit = (e) => {
    e.preventDefault();
    console.log(day);
  };

  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay();

  const dayCalc = () => {
    return "--";
  };

  const monthCalc = () => {
    return "--";
  };

  const yearCalc = () => {
    return "--";
  };

  return (
    <>
      <Form onSubmit={submit} />
      <Button onClick={submit} />
      <Output day={dayCalc} month={monthCalc} year={yearCalc} />
    </>
  );
}

export default App;
