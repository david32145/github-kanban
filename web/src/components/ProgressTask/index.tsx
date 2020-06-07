import React from "react";

import { Container } from "./styles";

interface ProgressTaskProps {
  completed_cards: number;
  total_cards: number;
}

function calculatePercentage(
  completed_cards: number,
  total_cards: number
): string {
  if (total_cards === 0) {
    return "100";
  }
  return Number((completed_cards / total_cards) * 100).toFixed(0);
}

const ProgressTask: React.FC<ProgressTaskProps> = ({
  completed_cards,
  total_cards,
}) => {
  return (
    <Container
      completedPercentage={calculatePercentage(completed_cards, total_cards)}
    >
      <div className="progress-bar">
        <div className="progress" />
        <span className="percentage-text">
          {total_cards > 0
            ? calculatePercentage(completed_cards, total_cards)
            : 100}
          %
        </span>
        <span className="tasks-completed">
          <span style={{ color: "#50D8D7" }}>{completed_cards}</span>
          <span>{` / ${total_cards}`}</span>
        </span>
      </div>
    </Container>
  );
};

export default ProgressTask;
