import React from "react";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./style/createGlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <HomePage />
      <GlobalStyle />
    </>
  );
};

export default App;
