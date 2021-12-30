import { useEffect, useState, FC } from 'react';
import Image from 'next/image';

import {
  Button, Divider, IconButton, useTheme,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { NightModeSwitch } from './SwitchNightMode';
import { Container } from './styles';
import { MobileMenu } from './MobileMenu';
// import { SideModal } from '../SideModal';

interface HeaderProps {
	handleMode: () => void
}

const Header: FC<HeaderProps> = ({ handleMode }) => {
  const [backgroundHeader, setBackgroundHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();

  const isNightMode = theme.palette.mode === 'dark';

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
              <Image src={isNightMode ? '/logo.png' : '/logo_dark.png'} alt="chessflix logo" layout="fill" />
            </div>
          </div>
          <ul className="menu">
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#treinadores">
                Treinadores
              </a>
            </li>
            <li>
              <a href="#cursos">
                Nossos Cursos
              </a>
            </li>
            <li>
              <a href="#contato">
                Contato
              </a>
            </li>
          </ul>
          <div className="actions">
            <NightModeSwitch onClick={handleMode} checked={isNightMode} />
            <Button target="__blank" href="https://membros.chessflix.com.br/" className="login-button">Login</Button>
            <IconButton className="menu-icon" onClick={handleMobileMenu}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
        <Divider className="divider" />
      </Container>
      <MobileMenu open={mobileMenuOpen} handleOpen={setMobileMenuOpen} />
    </>
  );
};

export { Header };
