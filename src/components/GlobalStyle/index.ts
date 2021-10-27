import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html, body {
      padding: 0;
      margin: 0;
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
