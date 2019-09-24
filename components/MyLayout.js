import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  purple: 'purple'
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; /* 10px/16px = 62.5% -> 1rem = 10px */
  }

  body {
    line-height: 1.6;
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
