import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: NotoSansR;
    src: url('/fonts/NotoSansKR-Regular.otf') format('truetype');
  }

  @font-face {
    font-family: NotoSansL;
    src: url('/fonts/NotoSansKR-Light.otf') format('truetype');
  }

  @font-face {
    font-family: NotoSansB;
    src: url('/fonts/NotoSansKR-Bold.otf') format('truetype');
  }

  * { 
    box-sizing: border-box;
    text-decoration: none;
  }

  a{
    color: black;
  }

  body {
    font-family: NotoSansR;
  }

  input,
  button{
	border:none;
  }

  input:focus,
  input:active,
  button:focus,
  button:active {
    outline: none;
  }
`;

export default GlobalStyle;
