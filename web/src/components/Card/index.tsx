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
}

interface DragObject {
  type: string;
  boardIndex: number;
  cardIndex: number;
}

const Card: React.FC<CardProps> = ({ card, boardIndex, cardIndex }) => {
  const cardRef = useRef<HTMLDivElement>() as React.MutableRefObject<
    HTMLInputElement
  >;
  const dispatch = useDispatch();
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", boardIndex, cardIndex },
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
          BoardService.move({
            fromBoard: currentBoardIndex,
            fromCard: currentCartIndex,
            toBoard: targetBoardIndex,
            toCard: targetBoardIndex,
          })
        );
      }
    },
  });

  dropRef(dragRef(cardRef));
  return (
    <Container isDragging={isDragging} ref={cardRef} color={card.color}>
      <div className="header">
        <h1>{card.title}</h1>
        <span>{`#${card.issueId}`}</span>
      </div>
      <p>{card.description}</p>
    </Container>
  );
};

export default Card;
