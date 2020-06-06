import { combineReducers } from "redux";

import { authReducer, AuthState } from "./modules/auth";
import { boardReducer, BoardState } from "./modules/board";

export interface State {
  auth: AuthState;
  board: BoardState;
}

const rootReducer = combineReducers<State>({
  auth: authReducer,
  board: boardReducer,
});

export default rootReducer;
