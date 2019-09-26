import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  img {
    display: block;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; /* 10px/16px = 62.5% -> 1rem = 10px */
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Karla', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.9rem;
    color: ${props => props.theme.darkBlue};
    background-color: #fff;
    padding-top: 7.6rem;
  }

  a {    
    color: ${props => props.theme.darkBlue};
    transition: color .3s ease;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.red};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    padding: 2rem 0;
  }

  h1 {
    font-size: 3.8rem;
    line-height: 3.8rem;    
  }

  h2 {
    font-size: 3.4rem;    
    line-height: 3.4rem;    
  }

  h3 {
    font-size: 3.2rem;  
    line-height: 3.2rem;    
  }

  h4 {
    font-size: 3rem;    
  }

  h5 {
    font-size: 2.8rem;   
  }

  h6 {
    font-size: 2.6rem;    
  }

  em {
    font-style: italic;
  }
`;

export default GlobalStyle;
