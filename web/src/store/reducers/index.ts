import { combineReducers } from "redux";

import { authReducer, AuthState } from "./auth";

interface State {
  auth: AuthState;
}

const rootReducer = combineReducers<State>({
  auth: authReducer,
});

export default rootReducer;
