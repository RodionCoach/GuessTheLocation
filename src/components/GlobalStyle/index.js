import { createGlobalStyle } from 'styled-components';
import * as normalizeCss from 'normalize.css';

const GlobalStyle = createGlobalStyle`
  ${normalizeCss}

  html,
  body {
    background: #e5e5e5;
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }

  body {
    display: flex;
    flex: 1;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  div {
    box-sizing: border-box;
  }

  #root {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`;

export default GlobalStyle;
