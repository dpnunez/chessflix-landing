import { createTheme } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		transition: color 0.1s, background-color 0.3s;
	}

	html,
	body {
		scroll-behavior: smooth;
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
	}

	.MuiButtonBase-root {
		text-transform: none !important;
		font-size: 16px !important;
	}
`;

export type ThemeMode = 'dark' | 'light'

const getTheme = (mode: ThemeMode = 'dark') => createTheme({
  palette: {
    mode,
    primary: {
      main: '#FE9A22',
      light: '#FFC278',
      dark: '#c46c00',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Inter',
  },
  sizes: {
    header: '72px',
    pageWidth: {
      desktop: '1235px',
    },
  },
  glassBackground: {
    dark: 'rgba(20,20,20,.8)',
    light: 'rgba(255,255,255,.8)',
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
      },
    },
  },
});

export { getTheme, GlobalStyle };
