import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import APIRestService from "services/APIRestService";
import { User } from "models";
import { AuthSagaAction, AuthActionType, AuthAction } from "./reducer";

type SingInReponse = AxiosResponse<User>;

function* singIn(action: AuthSagaAction) {
  try {
    const response: SingInReponse = yield call(
      APIRestService.get,
      `/login/${action.username}`
    );
    yield put<AuthAction>({
      type: AuthActionType.SUCCESS_SING_IN,
      user: response.data,
    });
  } catch (err) {
    yield put<AuthAction>({
      type: AuthActionType.FAILED_SING_IN,
      error: "Respositório não encontrado",
    });
  }
}

export default function* () {
  yield all([takeLatest(AuthActionType.ASYNC_SING_IN, singIn)]);
}
