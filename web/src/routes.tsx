import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import GitHubLoginPage from "pages/GitHubLogin";
import RepoNewPage from "pages/Repo/New";
import RepoListPage from "pages/Repo/List";
import NewCardPage from "pages/NewCard";

import KanbanBoardPage from "pages/KanbanBoard";

import HeaderComponent from "components/Header";

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Switch>
        <Route path="/login" exact component={GitHubLoginPage} />
        <Route path="/repo/new" exact component={RepoNewPage} />
        <Route path="/repos" exact component={RepoListPage} />
        <Route path="/board" exact component={KanbanBoardPage} />
        <Route path="/board/card/new" exact component={NewCardPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
