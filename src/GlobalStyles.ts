import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #fff;
        font-family: 'Verdana', sans-serif;
        font-size: 22px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
        color: #000000;
    }
`;
