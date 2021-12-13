import {
  Hero, Teachers, Socials, Popular, Experience, Contact,
} from 'components';
import { Container } from 'styles/home';

const Home = () => (
  <Container>
    <Hero />
    <Teachers />
    <Socials />
    <Popular />
    <Experience />
    <Contact />
  </Container>
);

export default Home;
