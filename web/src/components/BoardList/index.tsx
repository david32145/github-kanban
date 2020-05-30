import React from "react";

import { useBoards } from "board";

import Card from "components/Card";
import DropZone from "components/DropZone";

import { Boards, Board } from "./styles";

const BoardList: React.FC = () => {
  const boards = useBoards();

  return (
    <Boards>
      {boards.map((board, index) => (
        <Board key={board.title}>
          <h2>{board.title}</h2>
          {board.cards.length > 0 &&
            board.cards.map((card, cardIndex) => (
              <Card
                key={card.issueId}
                card={card}
                boardIndex={index}
                cardIndex={cardIndex}
              />
            ))}
          {board.cards.length === 0 && <DropZone boardIndex={index} />}
        </Board>
      ))}
    </Boards>
  );
};

export default BoardList;
