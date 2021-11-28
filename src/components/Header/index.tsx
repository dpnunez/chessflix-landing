import { useEffect, useState } from 'react';

import { Button, Typography } from '@mui/material';
import { Container } from './styles';

const Header = () => {
  const [containedHeader, setContainedHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setContainedHeader(true);
        return;
      }
      setContainedHeader(false);
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container contained={containedHeader}>
      <div className="content">
        <div className="logo">
          <Typography variant="h5">ChessFlix</Typography>
        </div>
        <ul className="menu">
          <li>Início</li>
          <li>Treinadores</li>
          <li>Nossos Cursos</li>
          <li>Torneio</li>
          <li>Contato</li>
        </ul>
        <div className="actions">
          <Button>Login</Button>
        </div>
      </div>
    </Container>
  );
};

export { Header };
