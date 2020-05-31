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

export const FormContainer = styled.form`
  margin: 40px auto;
  width: 500px;
  h2 {
    font-family: Roboto;
    font-weight: bold;
    font-size: 30px;
    margin: 0 0 30px 0;
    padding: 0;

    color: #4d4d4d;

    text-align: left;
  }

  .add-button {
    text-transform: uppercase;
    margin-top: 20px;
  }
`;
