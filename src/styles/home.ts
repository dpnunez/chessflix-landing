import styled from 'styled-components';

const Container = styled.main`
	max-width: ${({ theme }) => theme.sizes.pageWidth.desktop};
	width: 100%;
	margin: auto;
`;

export { Container };
