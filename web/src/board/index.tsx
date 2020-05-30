import React, { useState, useContext } from "react";
import produce from "immer";
import BoardContext, { Board } from "./context";

const boardsFaker: Board[] = [
  {
    title: "Todo",
    creatable: true,
    cards: [
      {
        color: "#F9D825",
        title: "Add native FAP button",
        description:
          "Add native support  for floating action button on react native.",
        issueId: 10,
      },
    ],
  },
  {
    title: "Doing",
    creatable: true,
    cards: [
      {
        color: "#29E548",
        title: "Add native FAP button",
        description:
          "Add native support  for floating action button on react native.",
        issueId: 5,
      },
    ],
  },
  {
    title: "Review",
    creatable: true,
    cards: [
      {
        color: "#7B2CBF",
        title: "Add native FAP button",
        description:
          "Add native support  for floating action button on react native.",
        issueId: 3,
      },
    ],
  },
  {
    title: "Closed",
    creatable: true,
    cards: [
      {
        color: "#F72585",
        title: "Add native FAP button",
        description:
          "Add native support  for floating action button on react native.",
        issueId: 8,
      },
    ],
  },
];

const BoardProvider: React.FC = ({ children }) => {
  const [boards, setBoards] = useState<Board[]>(boardsFaker);
  const move = (
    fromBoardIndex: number,
    fromCardIndex: number,
    toBoardIndex: number,
    toCardIndex: number,
    toBoardIsEmpty = false
  ) => {
    const newBoards = produce(boards, (draft) => {
      const item = draft[fromBoardIndex].cards[fromCardIndex];
      draft[fromBoardIndex].cards.splice(fromCardIndex, 1);
      if (!toBoardIsEmpty) {
        draft[toBoardIndex].cards.splice(toCardIndex, 0, item);
      } else {
        draft[toBoardIndex].cards.push(item);
      }
    });
    console.log(newBoards);
    setBoards(newBoards);
  };
  return (
    <BoardContext.Provider value={{ boards, move }}>
      {children}
    </BoardContext.Provider>
  );
};

export function useMoveCard() {
  return useContext(BoardContext).move;
}

export function useBoards() {
  return useContext(BoardContext).boards;
}

export default BoardProvider;
