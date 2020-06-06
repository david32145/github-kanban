import { all, takeLatest, put } from "redux-saga/effects";

import { AuthSagaAction, AuthActionType, AuthAction } from "./reducer";

function* singIn(action: AuthSagaAction) {
  console.log(action.username);
  yield put<AuthAction>({
    type: AuthActionType.FAILED_SING_IN,
    error: "my test",
  });
}

export default function* () {
  yield all([takeLatest(AuthActionType.ASYNC_SING_IN, singIn)]);
}
