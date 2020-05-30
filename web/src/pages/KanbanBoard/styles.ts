import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
`;

export const RepoTitle = styled.div`
  margin: 20px 0 0 36px;
  display: flex;
  span {
    font-family: Roboto;
    font-weight: bold;
    font-size: 34px;

    margin-left: 6px;

    color: #4d4d4d;

    span {
      font-family: Roboto;
      font-weight: 300;
      font-size: 34px;

      color: #0077b6;
    }
  }
`;
