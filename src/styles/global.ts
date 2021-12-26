import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    max-width: 100%;
    overflow-x: hidden;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #373737;
  }

  a {
    text-decoration: none;
  }

  body {
    font-family: 'Lato', sans-serif;
  }
`