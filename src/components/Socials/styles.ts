import styled, { css } from 'styled-components';

const Container = styled.section`
	display: flex;
	justify-content: space-around;
	max-width: ${({ theme }) => theme.sizes.pageWidth.desktop};
	width: 100%;
	margin: auto;
	height: 40vh;
	max-height: 600px;
	align-items: center;
`;

const Social = styled.div<{ count: boolean, value: number}>`
	@property --num {
		syntax: "<integer>";
		initial-value: 0;
		inherits: false;
	}

	transition: --num 4s;
  counter-set: num var(--num);
	font-size: 3rem;
	font-weight: 800;
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	border-radius: .3rem;
	transition: background-color 0.5s ease;

	svg {
		font-size: 3rem;
	}

	${({ count, value }) => count && css`
	--num: ${value};
	`}

	&::after {
		content: counter(num);
	}

	&:hover {
		background-color: rgba(0,0,0,0.3);
		cursor: pointer;
	}
`;

export { Container, Social };
