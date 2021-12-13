import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useState, FC } from 'react';
import { Typography } from '@mui/material';
import { SectionContainer as Container } from '../SectionContainer';
import { ListContainer } from './styles';

import { Card } from './Card';
import { Item } from './Item';

interface videoType {
	name: string,
	id: number,
	thumb: string,
	author: string,
	area: 'main' | 'up' | 'down'
}

interface ListProps {
	handleSelected: (arg0: number | null) => void;
}

const foo: videoType[] = [{
  name: 'Entendendo as estruturas de peões',
  author: 'Evandro Barbosa',
  id: 1,
  thumb: 'https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  area: 'main',
}, {
  name: 'Mago de Riga',
  author: 'Luis Paulo Supi',
  id: 2,
  thumb: 'https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  area: 'up',
}, {
  name: 'Introdução ao ataque',
  author: 'GM Yago',
  id: 3,
  thumb: 'https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  area: 'down',
}];

const List: FC<ListProps> = ({ handleSelected }) => (
  <ListContainer className="card-list">
    {foo.map((video) => <Card key={video.id} {...video} handleChange={handleSelected} />)}
  </ListContainer>
);

const Popular = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <Container title="Cursos Populares">
      <AnimateSharedLayout>
        <List handleSelected={setSelectedId} />
        <AnimatePresence>
          {selectedId && <Item active={selectedId} list={foo} key="item" handleChange={setSelectedId} />}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Container>
  );
};

export { Popular };
