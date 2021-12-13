import styled from 'styled-components';

const Container = styled.footer`
	background-color: ${({ theme }) => (theme.palette.mode === 'dark' ? theme.glassBackground.dark : theme.glassBackground.light)};
	padding: 1.5rem 0;

	.content {
		width: 100%;
		max-width: ${({ theme }) => theme.sizes.pageWidth.desktop};
		padding: 0 1rem;
		margin: auto; 

		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		grid-auto-columns: 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			"copyright socials";

		.copyright {
			grid-area: copyright;
			display: flex;
			align-items: center;
		}

		.socials {
			grid-area: socials;
			display: flex;
			justify-content: flex-end;
		}

		
	}
`;

export { Container };
