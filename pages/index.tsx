import {
  Hero, Teachers, Socials, Popular,
} from 'components';
import { Container } from 'styles/home';

const Home = () => (
  <Container>
    <Hero />
    <Teachers />
    <Socials />
    <Popular />
  </Container>
);

export default Home;
