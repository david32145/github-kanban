import { GitHubUser } from "./context";

export { AuthProvider as default, useAuth, useIsLogged } from "./provider";
export interface GitHubLogin extends GitHubUser {}
