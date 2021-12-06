import type { AppProps } from 'next/app';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { getTheme, GlobalStyle, ThemeMode } from 'theme';

import { Header } from 'components';
import { useCallback, useMemo, useState } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  const theme = useMemo(() => getTheme(themeMode), [themeMode]);
  const handleThemeMode = useCallback(() => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  }, [themeMode, setThemeMode]);

  return (
    <>
      <GlobalStyle />
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header handleMode={handleThemeMode} />
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
};

export default MyApp;
