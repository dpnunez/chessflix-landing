import styled from 'styled-components';
import { SectionContainer } from '../SectionContainer';

const Container = styled(SectionContainer)`
	margin-top: 13rem !important;
	padding-bottom: 2rem !important;
	
	.content { 
		display: grid; 
		grid-template-columns: 1fr 1fr; 
		grid-template-rows: 1fr; 
		gap: 0px 0px; 
		grid-template-areas: 
			"text mockup";
		.asset {
			grid-area: mockup;
			position: relative;
			height: 80vh;
			max-height: 690px;
			aspect-ratio: 11/20;
			margin-left: auto;

			span {
			overflow: unset !important;
			}
			img {
				filter: drop-shadow(15px 28px 22px rgb(0,0,0,0.45));
			}
		}
		
		.text {
			grid-area: text;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;

			.topic {
				display: grid; 
				grid-template-columns: auto 1fr; 
				grid-template-rows: auto auto; 
				gap: 0px 2rem; 
				grid-template-areas: 
					"icon title"
					"icon subtitle";

				.title {
					grid-area: title;
					font-weight: 600;
				}

				.icon {
					height: 52px;
					width: 52px;
					border-radius: 50%;
					background-color: blue;
					grid-area: icon;
					margin: auto;
					display: flex;
					align-items: center;
					justify-content: center;
					background: rgba(0, 0, 0, 0.05);
				}

				.subtitle {
					grid-area: subtitle;
				}
			}
		}
	}
`;

export { Container };
