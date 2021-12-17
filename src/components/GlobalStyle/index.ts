import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      list-style: none;

    }
    body {
      -webkit-font-smoothing: antialiased !important;

    }
    body html #root {
      height: 100% ;

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
`
