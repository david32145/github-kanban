import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { AuthState, AuthService } from "store/modules/auth";

import { Container, LinkButton } from "./styles";

const HeaderComponent: React.FC = () => {
  const location = useLocation();
  const auth = useSelector<RootState, AuthState>((state) => state.auth);
  const dispatch = useDispatch();
  function handlerLogout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    dispatch(AuthService.logout());
  }

  return (
    <Container>
      {auth.user ? (
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
            onClick={handlerLogout}
            pathname={location.pathname}
          >
            Logout
          </LinkButton>
        </>
      ) : (
        <LinkButton to="/login" pathname={location.pathname}>
          login
        </LinkButton>
      )}
    </Container>
  );
};

export default HeaderComponent;
