import React from "react";

import Routes from "./routes";

import GlobalStyles from "styles/globalStyle"

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  )
}

export default App;