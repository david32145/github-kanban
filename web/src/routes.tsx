import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { createBrowserHistory } from "history";

import GitHubLoginPage from "pages/GitHubLogin";
import RepoNewPage from "pages/Repo/New";
import RepoListPage from "pages/Repo/List";
import NewCardPage from "pages/NewCard";

import KanbanBoardPage from "pages/KanbanBoard";

import HeaderComponent from "components/Header";
import LoginService from "services/LoginService";
import { AuthService, AuthState } from "store/modules/auth";
import { RootState } from "store";

export const history = createBrowserHistory();

const Routes: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector<RootState, AuthState>((state) => state.auth);
  useEffect(() => {
    if (LoginService.isLogged()) {
      const user = LoginService.getUser();
      dispatch(AuthService.setUser(user));
    }
  }, []);
  return (
    <Router history={history}>
      <HeaderComponent />
      <Switch>
        {!auth.user ? (
          <>
            <Route path="/login" exact component={GitHubLoginPage} />
            <Route path="*">
              <Redirect to="/login" />
            </Route>
          </>
        ) : (
          <>
            <Route path="/repo/new" exact component={RepoNewPage} />
            <Route path="/repos" exact component={RepoListPage} />
            <Route
              path="/:repository_id/boards"
              exact
              component={KanbanBoardPage}
            />
            <Route path="/board/card/new" exact component={NewCardPage} />
            <Route path="*">
              <Redirect to="/repos" />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default Routes;
