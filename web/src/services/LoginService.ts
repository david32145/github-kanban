import { User } from "models";

class LoginService {
  private BASE_URL = "@githubKanban";

  public login(user: User): void {
    localStorage.setItem(`${this.BASE_URL}/user`, JSON.stringify(user));
  }

  public logout(): void {
    localStorage.removeItem(`${this.BASE_URL}/user`);
  }

  public getUser(): User {
    const userAsJson = localStorage.getItem(`${this.BASE_URL}/user`);
    return (userAsJson as unknown) as User;
  }

  public isLogged(): boolean {
    return localStorage.getItem(`${this.BASE_URL}/user`) !== undefined;
  }
}

export default new LoginService();
