import { all } from "redux-saga/effects";

import { authSaga } from "./modules/auth";

export default function* () {
  return yield all([authSaga()]);
}
