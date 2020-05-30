import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 65px;
  background-color: #ffffff;
  border-bottom: 3px solid #0077b6;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface LinkButtonProps {
  pathname: string;
}

export const LinkButton = styled(Link)<LinkButtonProps>`
  text-decoration: none;
  color: ${({ pathname, to }) => (pathname === to ? "#0077B6" : "#333333")};
  font-size: 15px;
  text-transform: uppercase;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-weight: 500;
  margin-left: 36px;
  letter-spacing: 1.1px;
  transition: 0.2s;

  :hover {
    color: #0077b6;
  }

  & + & {
    margin-left: 60px;
  }
`;
