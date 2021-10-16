import React from "react";

import { Routes } from "./routes";
import loadingApp from "./assets/gif/loading.gif";
import { Container, Image } from "./App.styled";

const MAX = 12000;
const MIN = 8000;

function App() {
  const [appLoading, setAppLoading] = React.useState(true);

  React.useEffect(() => {
    const MS = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    // const MS = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    setTimeout(() => {
      setAppLoading(false);
    }, MS);
  }, []);

  return (
    <>
      {appLoading ? (
        <Container key="app-container">
          <Image src={loadingApp} alt="loading the app" />
        </Container>
      ) : (
        <Routes key="app-routes" />
      )}
    </>
  );
}

export default App;
