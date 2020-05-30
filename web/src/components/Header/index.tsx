import React from "react";
import { useLocation } from "react-router-dom";

import { useIsLogged } from "auth";

import { Container, LinkButton } from "./styles";

const HeaderComponent: React.FC = () => {
  const logged = useIsLogged();
  const location = useLocation();
  return (
    <Container>
      {logged && (
        <LinkButton to="/login" pathname={location.pathname}>
          login
        </LinkButton>
      )}
      {!logged && (
        <>
          <LinkButton to="/repos" pathname={location.pathname}>
            Repositories
          </LinkButton>
          <LinkButton to="/repo/new" pathname={location.pathname}>
            Add repo
          </LinkButton>
          <LinkButton to="/board" pathname={location.pathname}>
            Board
          </LinkButton>
          <LinkButton
            style={{ marginLeft: "auto", marginRight: 36 }}
            to="/logout"
            pathname={location.pathname}
          >
            Logout
          </LinkButton>
        </>
      )}
    </Container>
  );
};

export default HeaderComponent;
