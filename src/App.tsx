import { useState } from "react";
import { Form, Output, Footer } from "./components/content";

function App() {
  const [results, setResults] = useState({
    day: "--",
    month: "--",
    year: "--",
  });
  return (
    <>
      <div className="bg-offWhite font-custom text-custom flex h-full min-h-screen flex-col items-center justify-center font-normal">
        <div className="flex flex-1 flex-col items-center justify-center p-4">
          <main className="flex max-w-screen-md flex-col gap-16 rounded-t-3xl rounded-bl-3xl bg-white p-4">
            <Form setResults={setResults} />
            <Output
              day={results.day}
              month={results.month}
              year={results.year}
            />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
