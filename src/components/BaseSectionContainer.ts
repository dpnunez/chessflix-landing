import styled from 'styled-components';

const SectionContainer = styled.section`
	width: 100%;
	max-width: ${({ theme }) => theme.sizes.pageWidth.desktop};
	padding: 0 1rem;
	margin: auto;
`;

export { SectionContainer };
