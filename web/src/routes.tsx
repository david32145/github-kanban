import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router, Route, Switch, Redirect, RouteProps } from "react-router-dom";

import GitHubLoginPage from "pages/GitHubLogin";
import RepoNewPage from "pages/Repo/New";
import RepoListPage from "pages/Repo/List";
import NewCardPage from "pages/NewCard";

import KanbanBoardPage from "pages/KanbanBoard";

import HeaderComponent from "components/Header";
import LoginService from "services/LoginService";
import { AuthService } from "store/modules/auth";
import { history } from "./historyFactory";

interface PrivateRouteProps extends RouteProps {
  component: React.FC;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  if (!LoginService.isLogged()) {
    return (
      <Route {...rest}>
        <Redirect to="/login" />
      </Route>
    );
  }

  return (
    <Route {...rest}>
      <Component />
    </Route>
  );
};
const Routes: React.FC = () => {
  const dispatch = useDispatch();
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
        <Route path="/login" exact component={GitHubLoginPage} />
        <PrivateRoute path="/repo/new" exact component={RepoNewPage} />
        <PrivateRoute path="/repos" exact component={RepoListPage} />
        <PrivateRoute
          path="/repository/:repository_id/boards"
          exact
          component={KanbanBoardPage}
        />
        <PrivateRoute
          path="/repository/:repository_id/cards/new"
          exact
          component={NewCardPage}
        />
        <Route path="*">
          <Redirect to="/repos" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
