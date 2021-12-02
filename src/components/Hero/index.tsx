import { Typography, Button } from '@mui/material';
// import Player from 'react-youtube';
import { Container } from './styles';

const Hero = () => (
  <Container>
    <div className="content">
      <div className="text">
        <Typography variant="h1" className="title">
          Alcançe o próximo nível
        </Typography>
        <Typography className="subtitle">
          Chessflix, a maior plataforma de treinamento de xadrez da américa latina
        </Typography>
        <Button>Entrar na lista de espera</Button>
      </div>
      <div className="asset">
        <div className="circle" />
        {/* <Player
          videoId="2g811Eo7K8U"
          opts={{
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          }}
        /> */}
      </div>
    </div>

  </Container>
);

export { Hero };
