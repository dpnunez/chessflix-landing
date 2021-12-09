import { Typography } from "@mui/material"
import { Container } from './styles'
import Image from 'next/image';

const Experience = () => {
	
	return (
		<Container>
			<Typography variant="h2" fontWeight="800">Como você irá aprender</Typography>
			<div className="content">
				<div className="text">
					<div className="topic">
						<Typography variant="h4" className="title">Multiplataforma</Typography>
					</div>
					<div className="topic">
						<Typography variant="h4" className="title">Multiplataforma</Typography>
					</div>
					<div className="topic">
						<Typography variant="h4" className="title">Multiplataforma</Typography>
					</div>
				</div>
				<div className="asset">
					<Image src="/mobile-mockup.png" layout="fill"/>
				</div>
			</div>
		</Container>
	)
}
export { Experience }