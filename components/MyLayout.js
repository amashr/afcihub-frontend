import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Meta from './Meta';

const theme = {
  darkBlue: '#031e23',
  red: '#dc6041'
};

const StyledMyLayout = styled.div`
  /* img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  } */
`;

const MyLayout = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Meta />
      <StyledMyLayout>
        <Header />
        {props.children}
      </StyledMyLayout>
    </>
  </ThemeProvider>
);

export default MyLayout;
