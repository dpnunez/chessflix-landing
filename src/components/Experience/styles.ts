import { SectionContainer } from 'components/BaseSectionContainer'
import styled from 'styled-components'


const Container = styled(SectionContainer)`
	margin-top: 13rem;
	

	.content { 
		margin-top: 3rem;
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
			aspect-ratio: 10/20;
			margin: auto;

			span {
				overflow: unset;
			}
			img {
				filter: drop-shadow(15px 28px 22px rgb(0,0,0,0.45));
			}
		}
		
		.text {
			grid-area: text;
		}
	}
`

export { Container }