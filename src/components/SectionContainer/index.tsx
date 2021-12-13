import { FC } from 'react';
import { Typography } from '@mui/material';
import { Container } from './styles';

interface ContainerProps {
	title?: string,
	id?: string
}

const SectionContainer: FC<ContainerProps> = ({ title, children, ...props }) => (
  <Container {...props}>
    {title && (
    <Typography variant="h2" fontWeight="800" className="title">
      {title}
    </Typography>
    )}
    <div className="content">
      {children}
    </div>
  </Container>
);

export { SectionContainer };
