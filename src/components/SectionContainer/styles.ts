import styled from 'styled-components';

const Container = styled.section`
	width: 100%;
	max-width: ${({ theme }) => theme.sizes.pageWidth.desktop};
	padding: 0 1rem;
	margin: auto;
	padding-top: ${({ theme }) => `calc(${theme.sizes.header} + 1rem)`};
	margin-top: 0 !important;

	.title {
		margin-bottom: 42px;
		${({ theme }) => theme.breakpoints.down('md')} {
			font-size: 2.5rem;
		}
	}
`;

export { Container };
