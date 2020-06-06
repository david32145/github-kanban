import { all } from "redux-saga/effects";

import { authSaga } from "./modules/auth";
import { boardSaga } from "./modules/board";

export default function* () {
  return yield all([authSaga(), boardSaga()]);
}
