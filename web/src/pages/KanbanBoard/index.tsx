import React, { useState, useEffect } from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { MdBookmark } from "react-icons/md";

import { useDispatch } from "react-redux";

import BoardList from "components/BoardList";

import { Repository } from "models";
import APIRestService from "services/APIRestService";
import { useParams } from "react-router-dom";
import { BoardService } from "store/modules/board";
import { Container, RepoTitle } from "./styles";

interface RouteParam {
  repository_id: string;
}

const KanbanBoardPage: React.FC = () => {
  const [repository, setRepository] = useState<Repository | undefined>();
  const params = useParams<RouteParam>();
  const dispatch = useDispatch();

  async function loadRepository() {
    const response = await APIRestService.get<Repository>(
      `/repositories/${params.repository_id}`
    );
    dispatch(BoardService.setBoards(response.data.boards));
    setRepository(response.data);
  }

  useEffect(() => {
    loadRepository().then();
  }, []);

  return (
    <Container>
      <RepoTitle>
        <MdBookmark size={40} color="#4C4C4C" />
        <span>
          {repository?.owner}
          <span>{` / ${repository?.name}`}</span>
        </span>
      </RepoTitle>
      <DndProvider backend={HTML5Backend}>
        <BoardList />
      </DndProvider>
    </Container>
  );
};

export default KanbanBoardPage;
