import { useState } from "react";
import { Form, Output, Button, Footer } from "./components/content";

function App() {
  const [values, setValues] = useState({
    day: "--",
    month: "--",
    year: "--",
  });
  const submit = () => {};

  const date = new Date();

  return (
    <>
      <div className="bg-offWhite font-custom text-custom flex h-full min-h-screen flex-col items-center justify-center font-normal">
        <div className="flex flex-1 flex-col items-center justify-center p-4">
          <main className="flex max-w-screen-md flex-col gap-16 rounded-t-3xl rounded-bl-3xl bg-white">
            <Form onSubmit={submit} />
            <Button onClick={submit} />
            <Output day={values.day} month={values.month} year={values.year} />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
