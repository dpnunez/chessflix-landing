import {
  Hero, Teachers, Socials, Popular, Experience,
} from 'components';
import { Container } from 'styles/home';

const Home = () => (
  <Container>
    <Hero />
    <Teachers />
    <Socials />
    <Popular />
    <Experience />
  </Container>
);

export default Home;
