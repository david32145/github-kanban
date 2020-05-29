import React from "react";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import GitHubLoginPage from "pages/GitHubLogin"

import HeaderComponent from "components/Header"

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Switch>
        <Route path="/login" exact component={GitHubLoginPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default routes;
