import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import clear from './styles/clear';
import fontAwesome from '../lib/styles/fontAwesome';
import Header from './Header';
import Meta from './Meta';

const theme = {
  purple: 'purple'
};

const GlobalStyle = createGlobalStyle`
  ${clear}
  ${fontAwesome}

  body {
    font-family: 'Karla', sans-serif;
    font-size: 16px;
    line-height: 29px;
    font-weight: 400;
    color: #031e23;
    background-color: #ffffff;
    overflow-x: hidden;   
  }

  body a {    
    color: #031e23;
    transition: color .3s ease;
    text-decoration: none;
  }

  body a:hover {
    color: #dc6041; 
  }

  body p, 
  body pre {
    margin-bottom: 13px;
  }

  blockquote {
    font-family: 'Roboto', sans-serif;
    color: #000;
    border-left: 8px solid #d95f41;
    padding-left: 20px;
    font-size: 24px;
    line-height: 35px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  blockquote cite {
    margin-top: 20px;
    display: block;
    font-weight: 400;
  }

  iframe {
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 20px 0;
  }

  h1 {
    font-size: 38px;
    line-height: 38px;    
  }

  h2 {
    font-size: 34px;    
    line-height: 34px;    
  }

  h3 {
    font-size: 32px;  
    line-height: 32px;    
  }

  h4 {
    font-size: 30px;    
  }

  h5 {
    font-size: 28px;   
  }

  h6 {
    font-size: 26px;    
  }

  em {
    font-style: italic;
  }

  ol {
    list-style-type: decimal;
  }

  pre {
    word-wrap: break-word;
    white-space: pre-wrap;
  }

  table, 
  th, 
  td {
    border:1px solid black;
    padding: 10px;
    vertical-align: middle;
  }

  sup {
    vertical-align: super;
    font-size: smaller;
  }

  sub {
    vertical-align: sub;
    font-size: smaller;
  }
`;

const StyledMyLayout = styled.div`
  /* background: ${props => theme.purple}; */
`;

const MyLayout = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledMyLayout>
        <Meta />
        <Header />
        {props.children}
      </StyledMyLayout>
    </>
  </ThemeProvider>
);

export default MyLayout;
