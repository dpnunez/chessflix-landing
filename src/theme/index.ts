import { createTheme, Theme as ThemeReturn } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html,
	body {
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
`;

declare module '@mui/material/styles' {
  export interface Theme {
		sizes: {
			header: string,
			pageWidth: {
				desktop: string;
				mobile?: string;
				tablet?: string;
			}
		},
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    sizes: {
			header: string,
			pageWidth: {
				desktop: string;
				mobile?: string;
				tablet?: string;
			}
		},
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FE9A22',
      light: '#FFC278',
      dark: '#c46c00',
      contrastText: '#fff',
    },
  },
  sizes: {
    header: '72px',
    pageWidth: {
      desktop: '1110px',
    },
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

export { theme, GlobalStyle };