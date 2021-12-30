import { ListItem, ListItemText } from '@mui/material';
import { Dispatch, FC, SetStateAction } from 'react';
import { SideModal } from '../SideModal';

interface MobileMenuProps {
	open: boolean
	handleOpen: Dispatch<SetStateAction<boolean>>
}
const MobileMenu: FC<MobileMenuProps> = ({ open, handleOpen }) => {
  const handleClose = () => handleOpen(false);

  return (
    <SideModal isActive={open} setIsActive={handleOpen}>
      <a href="#inicio" onClick={handleClose}>
        <ListItem button>
          <ListItemText primary="Início" />
        </ListItem>
      </a>
      <a href="#treinadores" onClick={handleClose}>
        <ListItem button>
          <ListItemText primary="Treinadores" />
        </ListItem>
      </a>
      <a href="#cursos" onClick={handleClose}>
        <ListItem button>
          <ListItemText primary="Nossos Cursos" />
        </ListItem>
      </a>
      <a href="#contato" onClick={handleClose}>
        <ListItem button>
          <ListItemText primary="Contato" />
        </ListItem>
      </a>
    </SideModal>
  );
};

export { MobileMenu };
