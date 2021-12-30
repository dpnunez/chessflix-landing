import { useRef, MouseEvent, useState } from 'react';
import { Typography, Button } from '@mui/material';
import ReactPlayer from 'react-player/youtube';
import { Container } from './styles';

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [fixingPosition, setFixingPosition] = useState<Boolean>(false);

  const updateTransform = (x: number, y: number) => {
    if (videoContainerRef?.current?.style) { videoContainerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) scale(1.2) translateX(40px)`; }
  };

  const updateTransition = (time: number = 0) => {
    if (videoContainerRef?.current?.style) {
      if (time) {
        videoContainerRef.current.style.transition = `transform ${time}ms ease`;
        videoContainerRef.current.style.transform = 'rotateY(0deg) scale(1.2) translateX(40px);';
        return;
      }
      videoContainerRef.current.style.transition = 'unset';
    }
  };

  const handleMove = (event: MouseEvent) => {
    const [x, y] = [(event.clientX / 100) - 20, (event.clientY / 100)];
    if (!fixingPosition) {
      window.requestAnimationFrame(() => updateTransform(x, y));
    }
  };

  const handleMouseOn = (event: MouseEvent) => {
    const [x, y] = [(event.clientX / 100) - 20, (event.clientY / 100)];
    setFixingPosition(true);
    window.requestAnimationFrame(() => {
      updateTransition(200);
      updateTransform(x, y);
    });
    setTimeout(() => {
      window.requestAnimationFrame(() => updateTransition(0));
      setFixingPosition(false);
    }, 100);
  };

  const handleMouseOut = () => {
    setFixingPosition(true);
    window.requestAnimationFrame(() => {
      updateTransition(200);
      updateTransform(-10, 0);
    });

    setTimeout(() => {
      setFixingPosition(false);
    }, 100);
  };

  return (
    <Container
      id="inicio"
      onMouseMove={handleMove}
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseOut}
    >
      <div
        className="content"

      >
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
