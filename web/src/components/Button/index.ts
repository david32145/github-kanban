import styled from "styled-components";

export default styled.button`
  width: 100%;
  height: 50px;

  background: #0077b6;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;

  cursor: pointer;

  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;

  transition: 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`;
