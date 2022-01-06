import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * { 
    box-sizing: border-box;
    text-decoration: none;
  }

  a{
    color: black;
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
