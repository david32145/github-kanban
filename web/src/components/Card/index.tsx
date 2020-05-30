import React from "react";

import { Container } from "./styles";

const Card: React.FC = () => {
  return (
    <Container>
      <div className="header">
        <h1>Add native FAP button</h1>
        <span>#23</span>
      </div>
      <p>Add native support for floating action button on react native.</p>
    </Container>
  );
};

export default Card;
