import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  background: #ffffff;
  box-shadow: 0px 0px 2px #0077b6;
  border-radius: 5px;
  border-left: 5px solid #f9d825;

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
`;
