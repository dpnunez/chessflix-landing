import styled from 'styled-components';

const Container = styled.section`
	display: flex;
	justify-content: space-around;
	max-width: ${({ theme }) => theme.sizes.pageWidth.desktop};
	width: 100%;
	margin: 4rem auto;
	height: 45vh;
	align-items: center;

	${({ theme }) => theme.breakpoints.down('md')} {
		flex-direction: column;
	}
`;

const Social = styled.div`
	${({ theme }) => theme.breakpoints.down('md')} {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
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
