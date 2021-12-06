import styled from 'styled-components';

const Container = styled.section`
	display: flex;
	justify-content: space-around;
	max-width: ${({ theme }) => theme.sizes.pageWidth.desktop};
	width: 100%;
	margin: auto;
	height: 60vh;
	align-items: center;
`;

const Social = styled.div`
	.value {
		font-weight: 800;
		margin-bottom: .5rem;
	}

	.insta {
		color: #D62976;
	}
	.yout {
		color: #C3352E;
	}

	a, div {
		display: flex;
		align-items: center;
	}

	svg {
		font-size: 2rem;
		margin-right: 10px;
	}
`;

export { Container, Social };
