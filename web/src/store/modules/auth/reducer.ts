import { User } from "models";
import LoginService from "services/LoginService";
import { history } from "historyFactory";

export enum AuthActionType {
  ASYNC_SING_IN = "@auth/async_sing_in",
  SUCCESS_SING_IN = "@auth/success_sing_in",
  FAILED_SING_IN = "@auth/failed_sing_in",

  SET_USER = "@auth/set_user",
  LOGOUT = "@auth/logout",
}

export interface State {
  user?: User;
  loading: boolean;
  error?: string;
}

export interface AuthAction {
  type: AuthActionType;
  error?: string;
  user?: User;
}

export interface AuthSagaAction {
  type: AuthActionType;
  username: string;
}

const INITIAL_STATE: State = {
  loading: false,
};

export function authReducer(state = INITIAL_STATE, action: AuthAction): State {
  switch (action.type) {
    case AuthActionType.ASYNC_SING_IN:
      return { loading: true };
    case AuthActionType.FAILED_SING_IN:
      return { loading: false, error: action.error };
    case AuthActionType.SUCCESS_SING_IN:
      return { loading: false, user: action.user };
    case AuthActionType.SET_USER:
      return { loading: false, user: action.user };
    case AuthActionType.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

class AuthService {
  public singIn(username: string): AuthSagaAction {
    return {
      type: AuthActionType.ASYNC_SING_IN,
      username,
    };
  }

  public setUser(user: User): AuthAction {
    return {
      type: AuthActionType.SET_USER,
      user,
    };
  }

  public logout(): AuthAction {
    LoginService.logout();
    history.push("/login");
    return {
      type: AuthActionType.LOGOUT,
    };
  }
}

export default new AuthService();
