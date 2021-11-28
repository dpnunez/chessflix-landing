import type { AppProps } from 'next/app';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'theme';

import { Header } from 'components';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </MuiThemeProvider>
  </>
);
export default MyApp;
