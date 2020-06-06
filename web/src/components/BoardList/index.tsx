import React from "react";
import { useSelector } from "react-redux";
import Card from "components/Card";
import DropZone from "components/DropZone";

import { RootState } from "store";
import { Board as BoardModel } from "models";

import { Boards, Board } from "./styles";

const BoardList: React.FC = () => {
  const boards = useSelector<RootState, BoardModel[]>(
    (state) => state.board.boards
  );
  return (
    <Boards>
      {boards.map((board, index) => (
        <Board key={board.title}>
          <h2>{board.title}</h2>
          {board.cards.map((card, cardIndex) => (
            <Card
              key={card.issueId}
              card={card}
              boardIndex={index}
              cardIndex={cardIndex}
            />
          ))}
          <DropZone boardIndex={index} show={board.cards.length === 0} />
        </Board>
      ))}
    </Boards>
  );
};

export default BoardList;
