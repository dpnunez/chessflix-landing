import 'styled-components';
import { Theme } from '@mui/material/styles';

interface CustomTheme {
	sizes: {
		header: string,
		pageWidth: {
			desktop: string;
			mobile?: string;
			tablet?: string;
		}
	},
	images?: {
		[key: string]: any
	},
	glassBackground: {
		dark: string,
		light: string
	}
}
declare module '@mui/material/styles' {
    interface Theme extends CustomTheme {}
    interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
