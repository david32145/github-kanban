import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import { Card as CardModel } from "models";

import { useDispatch } from "react-redux";

import { BoardService } from "store/modules/board";

import { Container } from "./styles";

interface CardProps {
  card: CardModel;
  boardIndex: number;
  cardIndex: number;
  color: string;
  boardId: number;
  repository_id: number;
}

interface DragObject {
  type: string;
  boardIndex: number;
  cardIndex: number;
  boardId: number;
  cardId: number;
}

const Card: React.FC<CardProps> = ({
  card,
  boardIndex,
  cardIndex,
  color,
  boardId,
  repository_id,
}) => {
  const cardRef = useRef<HTMLDivElement>() as React.MutableRefObject<
    HTMLInputElement
  >;
  const dispatch = useDispatch();
  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: "CARD",
      boardIndex,
      cardIndex,
      boardId,
      cardId: card.issue_id,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop<DragObject, any, any>({
    accept: ["CARD"],
    hover: (item, monitor) => {
      const currentBoardIndex = item.boardIndex;
      const currentCartIndex = item.cardIndex;
      const targetBoardIndex = boardIndex;
      const targetCardIndex = cardIndex;

      if (
        currentBoardIndex === targetBoardIndex &&
        currentCartIndex === targetCardIndex
      ) {
        return;
      }
      const currentOffset = monitor.getClientOffset();
      if (cardRef.current && currentOffset) {
        const targetSize = cardRef.current.getBoundingClientRect();
        const targetMiddlePointY = (targetSize.bottom - targetSize.top) / 2;

        const insideOffset = currentOffset?.y - targetSize.top;

        if (
          currentBoardIndex === targetBoardIndex &&
          currentCartIndex < targetCardIndex &&
          insideOffset < targetMiddlePointY
        ) {
          return;
        }

        if (
          currentBoardIndex === targetBoardIndex &&
          currentCartIndex > targetCardIndex &&
          insideOffset > targetMiddlePointY
        ) {
          return;
        }

        item.cardIndex = cardIndex;
        item.boardIndex = boardIndex;
        dispatch(
          BoardService.move(
            {
              fromBoard: currentBoardIndex,
              fromCard: currentCartIndex,
              toBoard: targetBoardIndex,
              toCard: targetCardIndex,
              fromCardId: item.cardId,
              toBoardId: boardId,
              toCardId: card.issue_id,
            },
            repository_id
          )
        );
      }
    },
  });

  dropRef(dragRef(cardRef));
  return (
    <Container isDragging={isDragging} ref={cardRef} color={color}>
      <div className="header">
        <h1>{card.title}</h1>
        <span>{`#${card.number}`}</span>
      </div>
      <p>{card.description}</p>
    </Container>
  );
};

export default Card;
