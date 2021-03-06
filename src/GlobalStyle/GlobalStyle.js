import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

:root {
  --white: #fff;
  --border: #F3F5F9;
  --title: #333D4A;
  --text: #A1A8B1;
  --bgc: #fcfcfc;
  --error: red;
  --success: #18bc9c;
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
`;
