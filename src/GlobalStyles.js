import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    color:white;
    margin: 0;
    padding: 0;
}

body {
background-color:#f5ad94;
background-image: radial-gradient(WHITE 15%, transparent 16%),
radial-gradient(white 15%, transparent 16%);
background-size: 60px 60px;
background-position: 0 0, 30px 30px;}

`;

export default GlobalStyle;
