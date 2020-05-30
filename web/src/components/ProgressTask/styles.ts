import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  .progress-bar {
    position: relative;
    height: 10px;
    width: 100%;
    background: #c4c4c4;
    border-radius: 5px;

    .progress {
      position: absolute;
      top: 0;
      left: 0;

      height: 10px;
      width: 75%;
      background: #50d8d7;
      border-radius: 5px;
    }

    .percentage-text {
      position: absolute;
      right: 0;
      top: -14px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 11px;

      color: #c4c4c4;
    }

    .tasks-completed {
      position: absolute;
      left: 0;
      top: -14px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 11px;

      color: #c4c4c4;
    }
  }
`;
