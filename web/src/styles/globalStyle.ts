import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body {
    background-color: #F6FCFE;
    height: 100vh;

    margin: 0;
    padding: 0;
    outline: none;
  }

  #root {
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  * {
    box-sizing: border-box;
  }
`;
