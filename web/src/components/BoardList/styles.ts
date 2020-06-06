import styled from "styled-components";

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

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 30px 0;
    h2 {
      padding: 0;
      font-family: Roboto;
      font-weight: bold;
      font-size: 24px;

      color: #4d4d4d;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background-color: #0077b6;
    }
  }
`;
