import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import APIRestService from "services/APIRestService";
import { User } from "models";
import { history } from "routes";
import LoginService from "services/LoginService";
import { AuthSagaAction, AuthActionType, AuthAction } from "./reducer";

type SingInReponse = AxiosResponse<User>;

const GITHUB_SING_IN_URL =
  "https://github.com/login/oauth/authorize?client_id=94704ff763ce7e8489e9&scope=repo";

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
    LoginService.login(response.data);
    history.push("/repos");
  } catch (err) {
    yield put<AuthAction>({
      type: AuthActionType.FAILED_SING_IN,
      error: "Respositório não encontrado",
    });
    window.location.replace(GITHUB_SING_IN_URL);
  }
}

export default function* () {
  yield all([takeLatest(AuthActionType.ASYNC_SING_IN, singIn)]);
}
