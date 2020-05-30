import React from "react";

import { MdBookmark } from "react-icons/md";

import Card from "components/Card";

import { Container, RepoTitle, Boards, Board } from "./styles";

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
      <Boards>
        {[1, 2, 3, 4].map((value) => (
          <Board key={value}>
            <h2>Todo</h2>

            {[1, 2, 3, 4].map((value2) => (
              <Card key={value2} />
            ))}
          </Board>
        ))}
      </Boards>
    </Container>
  );
};

export default KanbanBoardPage;
