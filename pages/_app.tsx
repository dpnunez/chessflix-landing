import type { AppProps } from 'next/app';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { getTheme, GlobalStyle, ThemeMode } from 'theme';

import { Footer, Header } from 'components';
import { useCallback, useMemo, useState } from 'react';
import 'styles/shared-layout.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  const theme = useMemo(() => getTheme(themeMode), [themeMode]);
  const handleThemeMode = useCallback(() => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  }, [themeMode, setThemeMode]);

  return (
    <>
      <GlobalStyle />
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header handleMode={handleThemeMode} />
            <Component {...pageProps} />
            <Footer />
          </ThemeProvider>
        </MuiThemeProvider>
      </StyledEngineProvider>
    </>
  );
};

export default MyApp;
