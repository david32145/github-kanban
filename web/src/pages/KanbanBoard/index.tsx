import React from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import BoardProvider from "board";

import { MdBookmark } from "react-icons/md";

import BoardList from "components/BoardList";

import { Container, RepoTitle } from "./styles";

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
