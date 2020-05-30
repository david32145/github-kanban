import React, { useCallback, useState, useContext } from "react";
import LoginService from "services/LoginService";
import AuthContext, { GitHubUser } from "./context";

export const AuthProvider: React.FC = ({ children }) => {
  const [gitHubUser, setGitHubUser] = useState<GitHubUser | undefined>();
  const login = useCallback((user: GitHubUser) => {
    LoginService.login(user);
    setGitHubUser(user);
  }, []);

  const logout = useCallback(() => {
    LoginService.logout();
    setGitHubUser(undefined);
  }, []);

  return (
    <AuthContext.Provider value={{ user: gitHubUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

export function useIsLogged() {
  return !!useContext(AuthContext).user;
}
