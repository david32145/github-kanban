import React from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import BoardProvider, { useBoards } from "board";

import { MdBookmark } from "react-icons/md";

import Card from "components/Card";

import { Container, RepoTitle, Boards, Board } from "./styles";

const BoardList: React.FC = () => {
  const boards = useBoards();
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
        </Board>
      ))}
    </Boards>
  );
};

const KanbanBoardPage: React.FC = () => {
  return (
    <Container>
      <RepoTitle>
        <MdBookmark size={40} color="#4C4C4C" />
        <span>
          facebook
          <span> / react-native</span>
        </span>
      </RepoTitle>
      <DndProvider backend={HTML5Backend}>
        <BoardProvider>
          <BoardList />
        </BoardProvider>
      </DndProvider>
    </Container>
  );
};

export default KanbanBoardPage;
