import { useRef, useEffect } from 'react';
import { Typography, Button } from '@mui/material';
import ReactPlayer from 'react-player/youtube';
import { Container } from './styles';

const Hero = () => {
  const videoContainerRef = useRef();
  const heroContainerRef = useRef();

  useEffect(() => {
    console.log(heroContainerRef?.current);
  }, [heroContainerRef?.current]);

  return (
    <Container>
      <div className="content" ref={heroContainerRef}>
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
          <div style={{ pointerEvents: 'none', zIndex: 2 }} ref={videoContainerRef}>
            <ReactPlayer url="https://www.youtube.com/embed/vV8JD-A1eMw?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fchessflix.com.br&widgetid=1" controls={false} playing muted config={{ playerVars: { controls: 0 } }} />
          </div>
          <div className="circle" />
        </div>
      </div>

    </Container>
  );
};

export { Hero };
