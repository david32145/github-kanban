import React from "react";
import { useSelector } from "react-redux";
import Card from "components/Card";
import DropZone from "components/DropZone";

import { MdAdd } from "react-icons/md";

import { RootState } from "store";
import { Board as BoardModel } from "models";

import { Link } from "react-router-dom";
import { Boards, Board } from "./styles";

const BoardList: React.FC<{ repository_id?: number }> = ({ repository_id }) => {
  const boards = useSelector<RootState, BoardModel[]>(
    (state) => state.board.boards
  );

  function getTitleFromType(type: string): string {
    if (type === "TODO") return "Todo";
    if (type === "DOING") return "Doing";
    if (type === "REVIEW") return "Review";
    if (type === "CLOSED") return "Closed";
    return "Unknown";
  }

  return (
    <Boards>
      {boards.map((board, index) => (
        <Board key={board.id}>
          <header>
            <h2>{getTitleFromType(board.type)}</h2>
            {board.type === "TODO" && (
              <Link to={`/repository/${repository_id}/cards/new`}>
                <MdAdd color="#FFF" size={24} />
              </Link>
            )}
          </header>
          {board.cards.map((card, cardIndex) => (
            <Card
              color={board.color}
              key={card.issue_id}
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
