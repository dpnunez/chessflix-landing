import styled from 'styled-components';
import { alpha } from '@mui/material/styles';

const Container = styled.div`
	height: 100vh;
	width: 100vw;

	padding-top: ${({ theme }) => theme.sizes.header};
	position: relative;


	.content { 
		width: 100%;
		height: 100%;
		max-width: ${({ theme }) => theme.sizes.pageWidth.desktop};
		margin: auto;
		padding: 0 1rem;
		display: grid; 
		grid-auto-columns: 1fr; 
		grid-template-columns: 1fr 1fr; 
		grid-template-rows: 1fr; 
		gap: 1rem 1rem; 
		grid-template-areas: 
			"text asset";


		.text {
			grid-area: text;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;

			.title {
				font-size: 5.3rem;
				font-weight: 800;
			}

			.subtitle {
				margin: 20px 0;
				font-size: 18px;
			}
		}
		.asset {
			grid-area: asset;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: center;

			.circle {
				position: absolute;
				margin-right: -4rem;
				width: 660px;
				height: 660px;
				border-radius: 50%;
				background-color: ${({ theme }) => alpha(theme.palette.primary.main, 0.45)};
			}
		}
	}
`;

export { Container };
