import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Meta from './Meta';

const theme = {
  darkBlue: '#031e23',
  red: '#dc6041'
};

const MyLayout = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Meta />
      <Header />
      {props.children}
    </>
  </ThemeProvider>
);

export default MyLayout;
