import { useEffect, useState } from 'react';
import {
  Instagram, YouTube, People, EmojiEvents,
} from '@mui/icons-material';
import { Container, Social } from './styles';

const Socials = () => {
  const [count, setCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCount(true);
        }
      });
    });

    const element = document.querySelector('.socials-wrapper');
    if (element) { observer.observe(element); }
  }, []);

  return (
    <Container className="socials-wrapper">
      <Social value={23800} count={count} className="social">
        <Instagram />
      </Social>
      <Social value={88200} count={count} className="social">
        <YouTube />
      </Social>
      <Social value={3146} count={count} className="social">
        <People />
      </Social>
      <Social value={5} count={count} className="social">
        <EmojiEvents />
      </Social>
    </Container>
  );
};

export { Socials };
