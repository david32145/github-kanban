import React from "react";
import { useDrop } from "react-dnd";

import { useDispatch } from "react-redux";

import { BoardService } from "store/modules/board";

import { Container } from "./styles";

interface DropZoneProps {
  boardId: number;
  boardIndex: number;
  show: boolean;
  repository_id: number;
}

interface DragObject {
  type: string;
  boardIndex: number;
  cardIndex: number;
  boardId: number;
  cardId: number;
}

const DropZone: React.FC<DropZoneProps> = ({
  boardIndex,
  show,
  boardId,
  repository_id,
}) => {
  const dispatch = useDispatch();
  const [, dropRef] = (useDrop<DragObject, any, any>({
    accept: ["CARD"],
    hover: (item) => {
      const currentBoardIndex = item.boardIndex;
      const currentCardIndex = item.cardIndex;
      item.boardIndex = boardIndex;
      item.cardIndex = 0;
      dispatch(
        BoardService.move(
          {
            fromBoard: currentBoardIndex,
            fromCard: currentCardIndex,
            toBoard: boardIndex,
            toCard: 0,
            toBoardIsEmpty: true,
            fromCardId: item.cardId,
            toBoardId: boardId,
            toCardId: 0,
          },
          repository_id
        )
      );
    },
  }) as unknown) as [any, React.MutableRefObject<HTMLInputElement>];
  return (
    <Container show={show} ref={dropRef}>
      Drop cards here...
    </Container>
  );
};

export default DropZone;
