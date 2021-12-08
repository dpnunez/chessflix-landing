import styled, { css } from 'styled-components';

const Container = styled.div`
	width: 100%;
	max-width: ${({ theme }) => theme.sizes.pageWidth.desktop};
	margin: auto;
`;

const CardContainer = styled.li<{ area: string }>`
	width: 100%;
	aspect-ratio: 16/9;
	height: 100%;
	grid-area: ${({ area }) => area};

	.card-image-container {
		${({ area }) => area === 'main' && css`
			height: 500px;
		`};
	}
`;

const ListContainer = styled.ul`
	display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 3rem; 
  grid-template-areas: 
    "main main up"
    "main main down"; 
	width: ${({ theme }) => theme.sizes.pageWidth.desktop};
	max-width: 100%;

	${({ theme }) => theme.breakpoints.down('lg') } {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr; 

		grid-template-areas: 
    "main"
		"up"
		"down";
	}
`;

const ItemContainer = styled.div<{ area?: 'main' | 'up' | 'down' }>`
	.card-image-container {
		${({ area }) => area === 'main' && css`
			height: 500px; 
		`}
	}

	.content-container {
		color: white;
		${({ area }) => area === 'main' && css`
			padding-top: 500px; 
		`}
	}

`;

export {
  Container, CardContainer, ListContainer, ItemContainer,
};
