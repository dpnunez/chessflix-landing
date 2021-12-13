import { Typography } from '@mui/material';
import Image from 'next/image';
import { Devices as DevicesIcon, AssignmentOutlined as AssignmentIcon, VideoCameraFrontOutlined as CameraIcon } from '@mui/icons-material';
import LoremIpsum from 'react-lorem-ipsum';
import { Container } from './styles';

const Experience = () => (
  <Container title="Como você irá aprender">
    <div className="text">
      <div className="topic">
        <div className="icon">
          <DevicesIcon color="primary" fontSize="large" />
        </div>
        <Typography variant="h5" className="title">Multiplataforma</Typography>
        <Typography className="subtitle">
          <LoremIpsum avgWordsPerSentence={1} random />
        </Typography>
      </div>
      <div className="topic">
        <div className="icon">
          <AssignmentIcon color="primary" fontSize="large" />
        </div>
        <Typography variant="h5" className="title">Materiais de apoio</Typography>
        <Typography className="subtitle">
          <LoremIpsum avgWordsPerSentence={1} random />
        </Typography>
      </div>
      <div className="topic">
        <div className="icon">
          <CameraIcon color="primary" fontSize="large" />
        </div>
        <Typography variant="h5" className="title">Experiência cinematográfica</Typography>
        <Typography className="subtitle">
          <LoremIpsum avgWordsPerSentence={1} random />
        </Typography>
      </div>
    </div>
    <div className="asset">
      <Image priority src="/mobile-mockup.png" layout="fill" alt="mockup" loading="eager" />
    </div>
  </Container>
);
export { Experience };
