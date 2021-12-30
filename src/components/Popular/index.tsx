import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import {
  useState, FC, Dispatch, SetStateAction,
} from 'react';
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
	handleSelected: Dispatch<SetStateAction<number | null>>
}

const foo: videoType[] = [{
  name: 'Entendendo as estruturas de peões',
  author: 'Evandro Barbosa',
  id: 1,
  thumb: 'https://chessflix.com.br/wp-content/uploads/2021/05/Entendendo20as20estruturas20de20peC3B5es20-20GM20Evandro20Barbosa20-20Aula20220-20IntroduC3A7C3A3o.00_00_19_22.Still001.jpg',
  area: 'main',
}, {
  name: 'Mago de Riga',
  author: 'Luis Paulo Supi',
  id: 2,
  thumb: 'https://chessflix.com.br/wp-content/uploads/2021/05/Supi20-20Modulo20220-20Aula20320-20Um20Exemplo20inspirador20do20grande20Mago20de20Riga.00_00_32_00.Still001.jpg',
  area: 'up',
}, {
  name: 'Introdução ao ataque',
  author: 'GM Yago',
  id: 3,
  thumb: 'https://chessflix.com.br/wp-content/uploads/2021/05/Entendendo2520as2520estruturas2520de2520pe25C325B5es2520-2520GM2520Evandro2520Barbosa2520-2520Aula252022520-2520Introdu25C325A725C325A3o.00_09_07_04.Still002.jpg',
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
    <Container title="Cursos Populares" id="cursos">
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
