import styled from 'styled-components';

const Container = styled.section`
	width: 100%;
	max-width: ${({ theme }) => theme.sizes.pageWidth.desktop};
	padding: 0 1rem;
	margin: auto;

	.title {
		margin-bottom: 42px;
	}
`;

export { Container };
