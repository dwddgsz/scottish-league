import {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

:root {
  --white: #fff;
  --border: #F3F5F9;
  --title: #333D4A;
  --text: #A1A8B1;
  --bgc: #fcfcfc;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  height: 100%;
  font-size: 62.5%;
  font-family: "Poppins";
}
body {
  height: 100%;
  background-color: var(--bgc);
}
input, button, textarea, select {
  font: inherit;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
`