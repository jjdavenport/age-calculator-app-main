import Form from "./components/form";
import Output from "./components/output";
import Button from "./components/button";
import Footer from "./components/footer";

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
      <div className="flex h-full min-h-screen flex-col items-center justify-center bg-offWhite font-custom text-custom font-normal">
        <div className="flex flex-1 flex-col items-center justify-center p-4">
          <main className="~sm/md:~rounded-br-mobile/desktop flex max-w-screen-md flex-col gap-16 rounded-t-3xl rounded-bl-3xl bg-white ~sm/md:~px-4/12 ~sm/md:~py-10/14">
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
