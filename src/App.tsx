import { Form, Output, Button, Footer } from "./components/content";

function App() {
  const submit = (e) => {
    e.preventDefault();
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
      <div className="bg-offWhite font-custom text-custom flex h-full min-h-screen flex-col items-center justify-center font-normal">
        <div className="flex flex-1 flex-col items-center justify-center p-4">
          <main className="flex max-w-screen-md flex-col gap-16 rounded-t-3xl rounded-bl-3xl bg-white">
            <Form onSubmit={submit} />
            <Button onClick={submit} />
            <Output day={dayCalc} month={monthCalc} year={yearCalc} />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
