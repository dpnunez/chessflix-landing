import { Drawer, ListItem, ListItemText } from '@mui/material';
import { FC } from 'react';

interface MobileMenuProps {
	open: boolean
	onClose: () => void
}
const MobileMenu: FC<MobileMenuProps> = ({ open, onClose }) => (
  <Drawer open={open} anchor="right" onClose={onClose}>
    <ListItem button>
      <ListItemText primary="Início" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Treinadores" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Nossos Cursos" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Torneio" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Contato" />
    </ListItem>
  </Drawer>
);

export { MobileMenu };
