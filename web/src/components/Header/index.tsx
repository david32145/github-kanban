import React from "react";

import { Container, LinkButton } from "./styles";

const HeaderComponent: React.FC = () => {
  return (
    <Container>
      <LinkButton to="/login">login</LinkButton>
    </Container>
  )
}

export default HeaderComponent;
