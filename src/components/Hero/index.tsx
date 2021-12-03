import { useRef, MouseEvent } from 'react';
import { Typography, Button } from '@mui/material';
import ReactPlayer from 'react-player/youtube';
import { Container } from './styles';

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const updateTransform = (rawX: number, rawY: number) => {
    const [x, y] = [(rawX / 100) - 20, (rawY / 100) - 10];

    if (videoContainerRef?.current?.style) { videoContainerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`; }
  };

  const handleMove = (event: MouseEvent) => {
    const [x, y] = [event.clientX, event.clientY];
    window.requestAnimationFrame(() => updateTransform(x, y));
  };

  return (
    <Container onMouseMove={handleMove}>
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
          <div className="video-container" ref={videoContainerRef}>
            <ReactPlayer url="https://www.youtube.com/embed/vV8JD-A1eMw?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fchessflix.com.br&widgetid=1" controls={false} playing muted config={{ playerVars: { controls: 0 } }} />
          </div>
          <div className="circle" />
        </div>
      </div>

    </Container>
  );
};

export { Hero };
