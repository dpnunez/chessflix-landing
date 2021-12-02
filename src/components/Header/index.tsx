import { useEffect, useState, FC } from 'react';

import { Button, Divider, IconButton } from '@mui/material';
import Image from 'next/image';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Container } from './styles';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
	handleMode: () => void
}

const Header: FC<HeaderProps> = ({ handleMode }) => {
  const [backgroundHeader, setBackgroundHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => setMobileMenuOpen((e) => !e);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setBackgroundHeader(true);
        return;
      }
      setBackgroundHeader(false);
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Container contained={backgroundHeader}>
        <div className="content">
          <div className="logo">
            <div className="logo-container">
              {/* <Typography variant="h5">ChessFlix</Typography> */}
              <Image src="/logo.png" alt="chessflix logo" layout="fill" />
            </div>
          </div>
          <ul className="menu">
            <li>Início</li>
            <li>Treinadores</li>
            <li>Nossos Cursos</li>
            <li>Torneio</li>
            <li>Contato</li>
          </ul>
          <div className="actions">
            <Button onClick={handleMode} className="login-button">Login</Button>
            <IconButton className="menu-icon" onClick={handleMobileMenu}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
        <Divider className="divider" />
      </Container>
      <MobileMenu open={mobileMenuOpen} onClose={handleMobileMenu} />
    </>
  );
};

export { Header };
