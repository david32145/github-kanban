import React from "react";

import AuthProvider from "auth";

import GlobalStyles from "styles/globalStyle";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyles />
    </AuthProvider>
  );
};

export default App;
