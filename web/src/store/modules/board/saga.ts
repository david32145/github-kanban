import { all, takeLatest, call, delay } from "redux-saga/effects";
import APIRestService from "services/APIRestService";
import { ActionBoardTypes, BoardAction } from "./reducer";

function* move(action: BoardAction) {
  yield delay(2000);
  try {
    yield call(
      APIRestService.put,
      `/repositories/${action.repository_id}/card/move`,
      {
        card_id: action.moveOptions?.fromCardId,
        to_board_id: action.moveOptions?.toBoardId,
        to_card_id: action.moveOptions?.toCardId,
      }
    );
  } catch (err) {
    console.log(err);
  }
}

export default function* () {
  yield all([takeLatest(ActionBoardTypes.MOVE_BOARD, move)]);
}
