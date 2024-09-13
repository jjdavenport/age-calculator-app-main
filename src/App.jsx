import data from "./components/assets/data.json";
import Form from "./components/form";
import Output from "./components/output";
import Button from "./components/button";

function App() {
  return (
    <>
      <Form data={data.inputs} />
      <Button />
      <Output data={data.outputs} />
    </>
  );
}

export default App;
