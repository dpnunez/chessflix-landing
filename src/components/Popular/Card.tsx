import { FC } from 'react';
import { motion } from 'framer-motion';
import { CardContainer } from './styles';

interface CardProps {
	id: number;
	name: string,
	thumb: string,
	area: string,
	handleChange: (arg0: number | null) => void
}
const Card: FC<CardProps> = ({
  id, name, thumb, handleChange, area,
}) => (
  <CardContainer onClick={() => handleChange(id)} className="card" area={area}>
    <div className="card-content-container">
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
          {name}
        </motion.div>
      </motion.div>
    </div>
  </CardContainer>
);

export { Card };
