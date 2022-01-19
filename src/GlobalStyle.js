import {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

*,
*::before,
*::after {
  margin:0;
  padding:0;
  box-sizing: border-box;
}
html {
  height:100%;
  font-size:62.5%;
  font-family: "Poppins";
}
body {
  height:100%;
}
`