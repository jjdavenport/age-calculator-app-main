import { useState } from "react";
import { Main, Footer, Wrapper, Container } from "./components/content";

function App() {
  const [results, setResults] = useState({
    days: "--",
    months: "--",
    years: "--",
  });
  return (
    <>
      <Wrapper>
        <Container>
          <Main results={results} setResults={setResults} />
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
