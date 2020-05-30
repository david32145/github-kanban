import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  .repo-box {
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 28px;
    width: 1000px;

    margin: 80px 0;
    h2 {
      font-family: Roboto;
      font-weight: 400;
      font-size: 25px;
      padding: 0;
      margin: 0 0 35px 0;

      color: #0077b6;
    }
  }
`;
