import { createGlobalStyle } from "styled-components";
import SfProDisplayBold from "./assets/fonts/SF-Pro-Display-Bold.otf";
import SfProDisplayThin from "./assets/fonts/SF-Pro-Display-Thin.otf";
export const GlobalStyle = createGlobalStyle`

 @font-face {
    font-family: 'SF Pro Display';
    src: url(${SfProDisplayThin}) format('opentype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url(${SfProDisplayBold}) format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 15px;
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 500;
  }

  body {
    background-color: black;
    overflow-x: hidden;
    font-family: 'SF Pro Display', sans-serif;
    color: #FFFFFF;
  }

  body::-webkit-scrollbar {
  display: none;
}
`;
