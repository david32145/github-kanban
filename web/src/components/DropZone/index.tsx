import React from "react";
import { useDrop } from "react-dnd";

import { useDispatch } from "react-redux";

import { BoardService } from "store/modules/board";

import { Container } from "./styles";

interface DropZoneProps {
  boardIndex: number;
  show: boolean;
}

interface DragObject {
  type: string;
  boardIndex: number;
  cardIndex: number;
}

const DropZone: React.FC<DropZoneProps> = ({ boardIndex, show }) => {
  const dispatch = useDispatch();
  const [, dropRef] = (useDrop<DragObject, any, any>({
    accept: ["CARD"],
    hover: (item) => {
      const currentBoardIndex = item.boardIndex;
      const currentCardIndex = item.cardIndex;
      item.boardIndex = boardIndex;
      item.cardIndex = 0;
      dispatch(
        BoardService.move({
          fromBoard: currentBoardIndex,
          fromCard: currentCardIndex,
          toBoard: boardIndex,
          toCard: 0,
          toBoardIsEmpty: true,
        })
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
