import { GitHubUser } from "auth/context";

class LoginService {
  private BASE_URL = "@githubKanban";

  public login(user: GitHubUser): void {
    localStorage.setItem(`${this.BASE_URL}/user`, JSON.stringify(user));
  }

  public logout(): void {
    localStorage.removeItem(`${this.BASE_URL}/user`);
  }

  public getUser(): GitHubUser {
    const userAsJson = localStorage.getItem(`${this.BASE_URL}/user`);
    return (userAsJson as unknown) as GitHubUser;
  }

  public isLogged(): boolean {
    return localStorage.getItem(`${this.BASE_URL}/user`) !== undefined;
  }
}

export default new LoginService();
