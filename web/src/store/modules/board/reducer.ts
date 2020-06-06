import producer from "immer";
import { Board, MoveCardOptions } from "models";
import { boardsFaker } from "./faker";

export enum ActionBoardTypes {
  MOVE_LOCAL_BOARD = "@board/move_local_board",

  ASYNC_MOVE_SERVER_BOARD = "@board/async_move_server_board",
  SUCCESS_MOVE_SERVER_BOARD = "@board/success_move_server_board",
  FAILED_MOVE_SERVER_BOARD = "@board/failed_move_server_board",
}

export interface State {
  boards: Board[];
  loading: boolean;
  error?: string;
}

export interface BoardAction {
  type: ActionBoardTypes;
  moveOptions: MoveCardOptions;
}

export interface BoardSagaAction {
  type: ActionBoardTypes;
  error?: string;
}

const INITIAL_STATE: State = {
  loading: false,
  boards: boardsFaker,
};

function moveLocalBoard(state = INITIAL_STATE, action: BoardAction): State {
  return producer(state, (draft) => {
    const {
      moveOptions: { fromBoard, fromCard, toBoard, toCard, toBoardIsEmpty },
    } = action;
    const { boards } = draft;
    const item = boards[fromBoard].cards[fromCard];
    boards[fromBoard].cards.splice(fromCard, 1);
    if (!toBoardIsEmpty) {
      boards[toBoard].cards.splice(toCard, 0, item);
    } else {
      boards[toBoard].cards.push(item);
    }
  });
}

export function boardReducer(
  state = INITIAL_STATE,
  action: BoardAction
): State {
  switch (action.type) {
    case ActionBoardTypes.MOVE_LOCAL_BOARD:
      return moveLocalBoard(state, action);
    default:
      return state;
  }
}

class BoardService {
  public move(options: MoveCardOptions): BoardAction {
    return {
      type: ActionBoardTypes.MOVE_LOCAL_BOARD,
      moveOptions: options,
    };
  }
}

export default new BoardService();
