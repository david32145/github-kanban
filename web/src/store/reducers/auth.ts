export enum AuthActionType {
  ASYNC_SING_IN = "@auth/async_sing_in",
  SUCCESS_SING_IN = "@auth/success_sing_in",
  FAILED_SING_IN = "@auth/failed_sing_in",
}

export interface User {
  id: number;
  username: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  user?: User;
  loading: boolean;
  error?: string;
}

export interface AuthAction {
  type: AuthActionType;
  error?: string;
  user?: User;
}

export interface SagaAction {
  type: AuthActionType;
  username: string;
}

const INITIAL_STATE: AuthState = {
  loading: false,
};

export function authReducer(
  state = INITIAL_STATE,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionType.ASYNC_SING_IN:
      return { loading: true };
    case AuthActionType.FAILED_SING_IN:
      return { loading: false, error: action.error };
    case AuthActionType.SUCCESS_SING_IN:
      return { loading: false, user: action.user };
    default:
      return state;
  }
}

class AuthService {
  public singIn(username: string): SagaAction {
    return {
      type: AuthActionType.ASYNC_SING_IN,
      username,
    };
  }
}

export default new AuthService();
