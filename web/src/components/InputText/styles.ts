import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-family: Roboto;
    font-weight: 400;
    font-size: 18px;

    color: #0077b6;
  }

  input {
    width: 100%;
    height: 45px;
    margin-top: 10px;
    padding: 0 15px;

    outline: none;

    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    border: none;

    border-right: 5px solid #0077b6;

    font-family: Roboto;
    font-weight: 300;
    font-size: 16px;

    color: #4d4d4d;

    ::placeholder {
      color: #d5d5d5;
    }
  }

  span {
    display: block;
    min-height: 15px;
    margin-top: 5px;

    font-family: Roboto;
    font-weight: 300;
    font-size: 13px;

    color: #50d8d7;
  }
`;
