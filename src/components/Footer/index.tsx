import { Divider, IconButton, Typography } from '@mui/material';
import { chessFlixSocials } from 'constantsProject';
import { Container } from './styles';

const Footer = () => (
  <>
    <Divider />
    <Container>
      <div className="content">
        <Typography className="copyright">
          Copyright © 2022. Todos direitos reservados.
        </Typography>
        <div className="socials">
          {chessFlixSocials.map(({ url, icon: Icon }) => (
            <IconButton key={url} component="a" target="_blank" href={url}>
              <Icon />
            </IconButton>
          ))}
        </div>
      </div>
    </Container>
  </>
);

export { Footer };
