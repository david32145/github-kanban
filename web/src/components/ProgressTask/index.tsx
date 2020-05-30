import React from "react";

import { Container } from "./styles";

const ProgressTask: React.FC = () => {
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
