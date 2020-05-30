import { createContext } from "react";

interface CardModel {
  title: string;
  description: string;
  issueId: number;
  color: string;
}

export interface Board {
  title: string;
  creatable: boolean;
  cards: CardModel[];
}

interface BoardContext {
  boards: Board[];
  move: (
    fromBoardIndex: number,
    fromCardIndex: number,
    toBoardIndex: number,
    toCardIndex: number,
    toBoardIsEmpty?: boolean
  ) => void;
}

const INITIAL_STATE: BoardContext = { boards: [], move: () => {} };

export default createContext<BoardContext>(INITIAL_STATE);
