import { createContext } from "react";

export interface GitHubUser {
  username: string;
  bio: string;
}

export interface AuthContext {
  user?: GitHubUser;
  login: (user: GitHubUser) => void;
  logout: () => void;
}

const INITIAL_VALUE: AuthContext = {
  login: () => {},
  logout: () => {},
};

const authContext = createContext<AuthContext>(INITIAL_VALUE);

export default authContext;
