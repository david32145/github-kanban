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

export const Boards = styled.div`
  display: flex;
  height: calc(100% - 60px);
  padding: 40px 20px 0px;
  flex-direction: row;
  overflow-x: scroll;
`;

export const Board = styled.div`
  background-color: #ffffff;
  margin: 0 10px;
  flex: 0 0 350px;
  padding: 28px 18px;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  max-height: calc(100%);
  overflow-y: scroll;

  h2 {
    margin: 0 0 30px 0;
    padding: 0;
    font-family: Roboto;
    font-weight: bold;
    font-size: 24px;

    color: #4d4d4d;
  }
`;
