import React from "react";

import { Container } from "./styles";

interface ProgressTaskProps {
  completed_cards: number;
  uncompleted_cards: number;
}

const ProgressTask: React.FC<ProgressTaskProps> = ({
  completed_cards,
  uncompleted_cards,
}) => {
  return (
    <Container>
      <div className="progress-bar">
        <div className="progress" />
        <span className="percentage-text">75%</span>
        <span className="tasks-completed">
          <span style={{ color: "#50D8D7" }}>3</span>
          <span> / 4</span>
        </span>
      </div>
    </Container>
  );
};

export default ProgressTask;
