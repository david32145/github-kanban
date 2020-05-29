import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  .login-box {
    width: 450px;
    padding: 40px;
    background: #FFFFFF;
    border-radius: 2px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

    .sing-in-button {
      margin-top: 60px;
    }
  }

  .github-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .helper-text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      h2 {
        margin: 0;
        padding: 0;
        font-family: Roboto;
        font-weight: bold;
        font-size: 34px;

        color: #000000;
      }

      h5{
        margin: 10px 0 0;
        padding: 0;
        font-family: Roboto;
        font-weight: 300;
        font-size: 18px;

        color: #4D4D4D;
      }
    }
  }
`;