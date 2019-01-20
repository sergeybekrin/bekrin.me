import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    -webkit-font-smoothing: antialiased;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 20px;
    line-height: 1.5;
    box-sizing: border-box;
    min-width: 320px;
    cursor: default;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyles;
