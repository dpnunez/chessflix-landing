import {
  Instagram, YouTube, People, EmojiEvents,
} from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Container, Social } from './styles';

const formater = Intl.NumberFormat('en', { notation: 'compact' });

const Socials = () => (
  <Container className="socials-wrapper">
    <Social className="social">
      <Typography className="value" variant="h3">
        {formater.format(23800)}
      </Typography>
      <a href="www.google.com" target="_blank">
        <Instagram className="insta" />
        Seguidores no Instagram
      </a>
    </Social>
    <Social className="social">
      <Typography className="value" variant="h3">
        {formater.format(88200)}
      </Typography>
      <a href="www.google.com" target="_blank">
        <YouTube className="yout" />
        Inscritos no youtube
      </a>
    </Social>
    <Social className="social">
      <Typography className="value" variant="h3">
        {formater.format(3146)}
      </Typography>
      <div>
        <People />
        Alunos
      </div>
    </Social>
    <Social className="social">
      <Typography className="value" variant="h3">
        {formater.format(5)}
      </Typography>
      <div>
        <EmojiEvents />
        Torneios
      </div>
    </Social>
  </Container>
);

export { Socials };
