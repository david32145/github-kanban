import styled from "styled-components"

import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 65px;
  background-color: #FFFFFF;
  border-bottom: 4px solid #0077B6;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LinkButton = styled(Link)`
  text-decoration: none;
  color: #333333;
  font-size: 16px;
  text-transform: uppercase;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-weight: 500;
  margin-left: 36px;
  letter-spacing: 1.1px;

  :hover {
    color: #0077B6;
  }
`
