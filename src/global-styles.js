import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: #1d2032;
    font-family: "NanumSquare", sans-serif;
    font-size: 16px;
    color: #fff;
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
`;
