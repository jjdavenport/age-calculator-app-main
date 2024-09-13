import data from "./components/assets/data.json";
import Form from "./components/form";
import Output from "./components/output";
import Button from "./components/button";

function App() {
  const submit = (e) => {
    e.preventDefault();
    console.log("works");
  };

  

  return (
    <>
      <Form data={data.inputs} onSubmit={submit} />
      <Button onClick={submit} />
      <Output data={data.outputs} />
    </>
  );
}

export default App;
