import { createGlobalStyle } from 'styled-components';
import LilitaOne from '../src/fonts/LilitaOne-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'LilitaOne';
        src: local('LilitaOne'),
        url(${LilitaOne}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul {
  padding: 0;
  list-style: none;
}
a {
  padding: 0;
  text-decoration: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}
button {
  display: block;
  margin: 0 auto;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
}
`;
