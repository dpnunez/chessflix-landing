import { Paper } from '@mui/material';
import styled from 'styled-components';

const Container = styled.section`
	padding: 0 1rem;
	max-width: ${({ theme }) => theme.sizes.pageWidth.desktop};
	width: 100%;
	margin: auto;

	.section-title {
		font-weight: 800;
	}


`;

const Card = styled(Paper)<{ image: string }>`
	width: 100%;
	aspect-ratio: 804 / 961;
	background-image: url(${(props) => props.image});
	background-size: 100% 100%;
	transition: background-size 0.75s ease, filter 0.75s ease;
	background-position: center;
	filter: grayscale(0.8);
	display: flex;
	flex-direction: column;
	justify-content: end;
	padding: 1rem;
	color: white;
	border-radius: 20px;
	cursor: pointer;

	.name {
    font-weight: 600;
		font-size: 2rem;
	}

	.title {
		font-size: 1rem;
	}

	.socials {
		max-height: 0;
		transition: max-height 0.75s ease;
		overflow: hidden;
	}

	svg {
		color: white;
	}

	hr {
		border-color: rgba(255,255,255,0.12);
	}

	&:hover {
		background-size: 112% 112%;
		filter: grayscale(0.4);

		.socials {
			max-height: 50px;

		}
	}



	
`;

export { Container, Card };
