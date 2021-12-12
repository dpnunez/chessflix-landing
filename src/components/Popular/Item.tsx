import { motion } from 'framer-motion';
import { FC } from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Typography } from '@mui/material';
import { ItemContainer } from './styles';

interface VideoProps {
	name: string;
	id: number,
	thumb: string
	area: 'main' | 'up' | 'down'
	author: string
}

interface ItemProps {
	list: VideoProps[],
	active: number,
	handleChange: (_: number | null) => void
}

const Item: FC<ItemProps> = ({
  active, list, handleChange,
}) => {
  const {
    name, id, thumb, area, author,
  } = list.find((e) => e.id === active) || {};
  return (
    <>
      <motion.div
        onClick={() => handleChange(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        className="overlay"
      />
      <ItemContainer className="card-content-container open" area={area} onClick={() => handleChange(null)}>
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={thumb} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <Typography variant="h2" className="course-title">
              {name}
            </Typography>
            <span className="author">
              {author}
            </span>
          </motion.div>
          <motion.div className="content-container" animate>
            <LoremIpsum
              p={6}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={1}
            />
          </motion.div>
        </motion.div>
      </ItemContainer>
    </>
  );
};

export { Item };
