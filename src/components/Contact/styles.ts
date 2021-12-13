import styled, { keyframes } from 'styled-components';
import { SectionContainer } from '../SectionContainer';

const backgroundGradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const Container = styled(SectionContainer)`
	.content {
		border-radius: 10px;
		display: grid;
		grid-template-columns: 0.7fr 1.2fr; 
		grid-template-rows: 1fr;
		grid-auto-columns: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			"info form";
		position: relative;
		margin-bottom: 10rem;

		.piece-1 {
			position: absolute;
			left: -9rem;
			transform: scaleX(-1)
		}

		.piece-2 {
			position: absolute;
			right: -14rem;
			top: 5rem;
		}


		.info {
			grid-area: info;
			background: ${({ theme }) => (theme.palette.mode === 'dark' ? theme.glassBackground.light : theme.glassBackground.dark)};
			background-size: 400% 400%;
			backdrop-filter: saturate(180%) blur(5px);
			animation: ${backgroundGradient} 15s ease infinite;
			z-index: 2;
			border-radius: 20px 0 0 20px;
			overflow: hidden;
			padding: 1.5rem;
			height: 100%;
    	justify-content: space-between;

			&, * {
				color: ${({ theme }) => (theme.palette.mode === 'dark' ? theme.palette.grey[900] : 'white')};
			}

			display: flex;
			flex-direction: column;

			.title-head {
				margin-bottom: 1rem;
			}

			.physical {
				margin: 3rem 0;
				display: flex;
				flex-direction: column;

				div {
					display: flex;
					margin: 10px 0;
					svg {
						margin-right: 1rem;
					}
				}
			}

			.socials {
				margin-left: auto;
			}
		}

		form {
			z-index: 2;
			margin-left: 0 !important;
			margin-top: 0 !important;
			border-radius:0 20px 20px 0;
			grid-area: form;
			padding: 1.5rem;
			background: ${({ theme }) => (theme.palette.mode !== 'dark' ? ' rgb(230, 230, 230, 0.8) ' : theme.glassBackground.dark)};
			backdrop-filter: saturate(180%) blur(5px);
		}

	}
`;

export { Container };
