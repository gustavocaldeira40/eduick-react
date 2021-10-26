import { createGlobalStyle } from 'styled-components';

export const StyledGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  a {
    text-decoration: none;
  }
  ul,
  ol {
    list-style: none;
  }
  button {
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }
`;
