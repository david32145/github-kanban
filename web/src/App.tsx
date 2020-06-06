import React from "react";

import { Provider as ReduxProvider } from "react-redux";

import AuthProvider from "auth";

import GlobalStyles from "styles/globalStyle";
import store from "store";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <Routes />
        <GlobalStyles />
      </AuthProvider>
    </ReduxProvider>
  );
};

export default App;
