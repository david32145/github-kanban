import producer from "immer";
import { Board, MoveCardOptions } from "models";

export enum ActionBoardTypes {
  MOVE_LOCAL_BOARD = "@board/move_local_board",

  SET_BOARDS = "@board/set_boards",

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
  moveOptions?: MoveCardOptions;
  boards?: Board[];
}

export interface BoardSagaAction {
  type: ActionBoardTypes;
  error?: string;
}

const INITIAL_STATE: State = {
  loading: false,
  boards: [],
};

function moveLocalBoard(state = INITIAL_STATE, action: BoardAction): State {
  return producer(state, (draft) => {
    if (!action.moveOptions) return;
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
    case ActionBoardTypes.SET_BOARDS:
      return { ...state, boards: action.boards || [] };
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

  public setBoards(boards: Board[]): BoardAction {
    return {
      type: ActionBoardTypes.SET_BOARDS,
      boards,
    };
  }
}

export default new BoardService();
