import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  .box-new-repo {
    width: 450px;
    padding: 40px;
    background: #ffffff;
    border-radius: 2px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

    .add-repo {
      display: block;
      margin-top: 10px;
      text-transform: uppercase;
      width: 100px;
      margin-left: auto;
    }
  }
`;
