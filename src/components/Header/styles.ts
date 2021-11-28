import styled from 'styled-components';

interface ContainerProps {
	contained: boolean;
}

const Container = styled.header<ContainerProps>`
	position: fixed;
	width: 100vw;
	height: ${({ theme }) => theme.sizes.header};
	transition: background-color 0.25s ease;
	background-color: ${({ contained }) => (contained ? 'red' : 'transparent')};

	.content {
		width: 100%;
		max-width: ${({ theme }) => theme.sizes.pageWidth.desktop};
		margin: 0 auto;
		height: 100%;
		display: grid; 
		grid-template-columns: 1fr auto 1fr; 
		grid-template-rows: 1fr; 
		gap: 0px 0px; 
		grid-template-areas: 
			"logo menu actions";
		.logo {
			grid-area: logo;
			display: flex;
			align-items: center;
			h2 {
				margin: auto 0;
			}
		}
		.menu {
			display: flex;
			align-items: center;
			grid-area: menu;
			list-style:none;
			margin: 0;
			li {
				margin: 10px 16px;
				display: inline;
			}
		}
		.actions {
			grid-area: actions;
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}
	}
`;

export { Container };
