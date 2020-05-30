import styled, { css } from "styled-components";

interface ContainerProps {
  color: string;
  isDragging: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  background: #ffffff;
  box-shadow: 0px 0px 2px #0077b6;
  border-radius: 5px;
  border-left: 5px solid ${(props) => props.color};
  cursor: grab;
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
      margin: 0;
      padding: 0;
      font-family: Roboto;
      font-weight: 500;
      font-size: 16px;

      color: #4d4d4d;
    }

    span {
      font-family: Roboto;
      font-weight: 300;
      font-size: 12px;

      color: #c4c4c4;
    }
  }

  p {
    margin: 10px 0;
    padding: 0;
    font-family: Roboto;
    font-weight: 300;
    font-size: 14px;

    color: #777777;
  }

  ${(props) =>
    props.isDragging &&
    css`
      box-shadow: none;
      border: none;
      border: 1px dashed #e5e5e5;
      .header,
      p {
        opacity: 0;
      }
    `}
`;
